const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const playlistReactionSchema = require("./PlaylistReaction");

const playlistSchema = new Schema(
  {
    playlistUrl: {
      type: String,
      // required: true,
    },
    playlistName: {
      type: String,
      // required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: (timestamp) => dateFormat(timestamp),
    // },
    username: {
      type: String,
      ref: "User",
    },
    user_id: {
      type: String,
      ref: "User",
    },
    reactions: [playlistReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

playlistSchema.virtual("playlistReaction").get(function () {
  return this.reactions.length;
});

const Playlist = model("Playlist", playlistSchema);

module.exports = Playlist;
