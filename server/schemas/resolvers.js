const { AuthenticationError } = require("apollo-server-express");
const { User, Photo } = require("../models");

// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().sort({ createdAt: -1 });
      //   .populate("photos");
    },
    photos: async (parent, { imageLink }) => {
      //   const params = imageLink ? { imageLink } : {};
      return Photo.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
