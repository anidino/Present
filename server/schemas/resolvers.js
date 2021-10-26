const { AuthenticationError } = require("apollo-server-express");
const { User, Photo, PlaylistReaction } = require("../models");
const Playlist = require("../models/Playlist");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      //context is the req object which is updated in the auth middleware
      // RETURNS ONE USER WITH PHOTO ATM
      if (true) {
        const userData = await User.findOne({ _id: context.user._id })
          // console
          //   .log(context.user._id)
          .select("-__v -password")
          .populate("username")
          .populate("email")
          .populate("firstName")
          .populate("lastName")
          .populate("photoName")
          .populate("photos")
          .populate("playlists");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async (parent, args, context) => {
      //return all the users
      return await User.find()
        .select("-__v -password")
        .populate("username")
        .populate("email")
        .populate("firstName")
        .populate("lastName")
        .populate("photoName")
        .populate("photos")
        .populate("playlists");
    },
    photos: async (parent, { imageLink }) => {
      //   const params = imageLink ? { imageLink } : {};
      return Photo.find().sort({ createdAt: -1 });
    },
    playlists: async (parent, args) => {
      return await Playlist.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      //   console.log("ARGS **********", args);
      const user = await User.create(args);
      // .then(
      //   (data, data1) => {
      //     console.log({ data, data1 });
      //     return data;
      //   },
      //   (err) => {
      //     if (err) {
      //       throw new Error(err);
      //     }
      //   }
      // );

      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // User Photos //
    addPhoto: async (parent, args, context) => {
      console.log("LOOOK HERE **********", { ...context.user, ...args });
      let updated_photos = [context.user.photos, { _id: args.photo_id }];
      let result = await User.updateOne(
        { _id: context.user._id },
        { $push: { photos: args.photo_id } } //PUSHES PHOTO_ID ATTRIBUTE ON PHOTO MODEL
      );
      console.log({ result });
      return args.photo_id;
    },
    deletePhotos: async (parent, args, context) => {
      //take args._ids
      //delete each photo from their collection
      const { _ids: ids_to_delete } = args;
      console.log({ args });
      try {
        let user = await User.findOne({ _id: context.user._id });

        //convert photo object to array of strings
        let old_photos = user.photos.map((photo) => photo.toString());
        // console.log({ old_photos });

        //gives back the photo if it is not part of what we are deleting
        let new_photos = old_photos.filter((ph) => ids_to_delete.includes(ph));
        // console.log({ new_photos });

        // update the photos for the loged in user
        const photos = await User.updateOne({ _id: context.user._id }, { $set: { photos: new_photos } });

        //return the deleted_ids
        return ids_to_delete;
      } catch (error) {
        // throw new Error("Delete operation failed");
        console.log(error);
      }
    },
    addPlaylist: async (parent, args, context) => {
      //link a playlist to a user
      if (!args._ids.length) throw new Error("Playlist ID missing");

      // 1,2,2,3,4,5 =>set()=> 1,2,3,4,5
      //spread operator ...
      // p= ['a','b','horse']
      //   c = [...p] ===> ...p === 'a','b','horse'
      let query = { _id: context.user._id };
      let old_playlist = (await User.findOne(query)).playlists;
      let new_playlist = Array.from(new Set([...old_playlist, ...args._ids]).values());
      //   console.log({ new_playlist, old_playlist });
      return await User.updateOne(query, { $set: { playlists: new_playlist } }).then((res) => true);
    },
    addReaction: async (parent, args, context) => {
      let query = { _ids: context.user._ids };
      let currentPlaylistId = (await User.findOne(query)).playlists[0];

      await Playlist.findByIdAndUpdate({ _id: currentPlaylistId }, { $push: { reactions: "test reaction" } }, { new: true });

      return "reaction successfully added";
    },
    //delete route is functional, no more issue with sandbox
    deletePlaylist: async (parent, args, context) => {
      if (!args._ids.length) throw new Error("Playlist ID missing");

      let query = { _id: context.user._id };
      let old_playlist = (await User.findOne(query)).playlists;

      // filter so new playlist only has playlists with IDs that were not deleted
      let new_playlist = old_playlist.filter((pl) => args._ids.includes(pl._id));
      //   console.log({ new_playlist, old_playlist });
      await User.updateOne(query, { $set: { playlists: new_playlist } });
      return args._ids;
      // returns id that is deleted
    },
    addPlaylistReaction: async (parent, { playlist_id, title, reactionBody }, context) => {
      if (context.user) {
        let username = context.user.username;

        const updatedPlaylist = await Playlist.findOneAndUpdate(
          { _id: playlist_id },
          { $push: { reactions: { username, title, reactionBody } } },
          { new: true, runValidators: true }
        );

        return updatedPlaylist;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deletePlaylistReaction: async (parent, { playlist_id, reaction_id }, context) => {
      if (context.user) {
        const updatedPlaylist = await Playlist.findOneAndUpdate(
          { _id: playlist_id },
          { $pull: { reactions: { _id: reaction_id } } },
          { new: true, runValidators: true }
        );

        return updatedPlaylist;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updatePlaylistReaction: async (parent, { playlist_id, reaction_id, title, reactionBody }, context) => {
      if (context.user) {
        let username = context.user.username;

        // removes the old reactions from the array
        const deleteOldReaction = await Playlist.findOneAndUpdate(
          { _id: playlist_id },
          { $pull: { reactions: { _id: reaction_id } } },
          { new: true, runValidators: true }
        );

        // creates a new reaction and pushes it into the array in place of the old one
        const pushUpdatedReaction = await Playlist.findOneAndUpdate(
          { _id: playlist_id },
          { $push: { reactions: { username, title, reactionBody } } },
          { new: true, runValidators: true }
        );

        return pushUpdatedReaction;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
