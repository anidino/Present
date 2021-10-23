const { AuthenticationError } = require("apollo-server-express");
const { User, Photo } = require("../models");

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
          .populate("photos");
        //   .populate('photos')
        //   .populate('playlist');

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async (parent, args, context) => {
      //return all the users
      return await User.find({});
    },
    photos: async (parent, { imageLink }) => {
      //   const params = imageLink ? { imageLink } : {};
      return Photo.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      //   console.log("ARGS **********", args);
      const user = await User.create(args);
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
      //receive photo from args
      //save to cloudinary
      //get id from cloudinary
      //add id to userphotos
    },
    deletePhotos: async (parent, args, context) => {
      //take args._ids
      //delete each photo from their collection /cloudinary if they uploaded their own and increase counter
      const { _ids: ids_to_delete } = args;
      console.log({ args });
      try {
        let user = await User.findOne({ _id: context.user._id });

        //convert photo object to array of strings
        let old_photos = user.photos.map((photo) => photo.toString());
        // console.log({ old_photos });

        //give us back the photo if it is not part of what we are deleting
        let new_photos = old_photos.filter((ph) => !ids_to_delete.includes(ph));
        // console.log({ new_photos });

        // update the photos for the loged in user
        const photos = await User.updateOne(
          { _id: context.user._id },
          { $set: { photos: new_photos } }
        );

        //return the deleted_ids
        return ids_to_delete;
      } catch (error) {
        // throw new Error("Delete operation failed");
        console.log(error);
      }
      //add if cloudinary delete is required (if we are to have the upload your own photo)
      //implement code to delete on cldnry
    },

    updateDashboardPhoto: async (parent, args, context) => {},
    deleteDashboardPhoto: async (parent, args, context) => {
      //delete the dashboard photo of authenticated user
    },
  },
};

module.exports = resolvers;
