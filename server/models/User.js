const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Photo = require("./Photo");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "You must enter a valid email address."],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 25,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 25,
    },
    dob: {
      type: Date,
      required: true,
    },
    photoName: {
      type: String,
    },
    dashBoardPhoto: {
      type: String,
    },
    photos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Photo",
      },
    ],
    // songs: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Song",
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// set up pre-save middleware to create and hash password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.virtual("songCount").get(function () {
  return this.songs.length;
});
const User = model("User", userSchema);
module.exports = User;