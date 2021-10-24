// const { Schema, model } = require("mongoose");
// const songReactionSchema = require("./SongReaction");
// const dateFormat = require("../utils/dateFormat");

// const songSchema = new Schema(
//   {
//     songUrl: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: (timestamp) => dateFormat(timestamp),
//     },
//     username: {
//       type: String,
//       ref: "User",
//     },
//     user_id: {
//       type: String,
//       ref: "User",
//     },
//     reactions: [songReactionSchema],
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// songSchema.virtual("songReaction").get(function () {
//   return this.reactions.length;
// });

// const Song = model("Song", songSchema);

// module.exports = Song;
