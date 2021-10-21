const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const photoSchema = new Schema(
  {
    name: String,
    desc: String,
    img: {
      data: Buffer,
      contentType: String,
    },
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

// const photoSchema = new mongoose.Schema(
//   {
//     imageLink: {
//       type: String,
//       //   required: true,
//     },
//     // createdAt: {
//     //   type: Date,
//     //   default: Date.now,
//     //   get: timestamp => dateFormat(timestamp)
//     // },
//     username: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// const Photo = model("Photo", photoSchema);

// module.exports = Photo;

const photoSchema = new Schema(
  {
    name: String,
    desc: String,
    img: {
      data: Buffer,
      contentType: String,
    },
    source: {
      type: String,
    },
    // i need to check this
    // username: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Photo = new model("Photo", photoSchema);

// module.exports = new mongoose.model("Photo", photoSchema);

module.exports = Photo;
