const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
    img: {
      data: Buffer,
      contentType: String,
    },
    // i need to check this
    user_id: {
      type: String,
      ref: "User",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = new mongoose.model("Photo", photoSchema);
