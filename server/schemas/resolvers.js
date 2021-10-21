const { AuthenticationError } = require("apollo-server-express");
const { User, Photo } = require("../models");


// const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    users: async () => {
      return await User.find().sort({ createdAt: -1 });
      //   .populate("photos");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        // .populate('songs')
    },
    photos: async () => {
      Photo.find()
        .select('-_id');
    }
    // photos: async (parent, { imageLink }) => {
    //   const params = imageLink ? { imageLink } : {};
    //   return Photo.find(params).sort({ createdAt: -1 });
    // },
  },
};

module.exports = resolvers;
