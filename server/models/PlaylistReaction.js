const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const playlistReactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 500,
    },
    title: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = playlistReactionSchema;
