const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const songReactionSchema = new Schema(
  {
    reactionBody: {
      type: Text,
      required: true,
    },
    title: {
      type: Text,
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

module.exports = songReactionSchema;
