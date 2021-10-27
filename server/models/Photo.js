const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const photoSchema = new Schema(
  {
    name: String,
    desc: String,
    // img: {
    //   data: Buffer,
    //   contentType: String,
    // },
    imageLink: {
      type: String,
      //   required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: timestamp => dateFormat(timestamp)
    // },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Photo = model("Photo", photoSchema);

module.exports = Photo;