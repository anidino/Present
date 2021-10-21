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

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
  },
};

module.exports = resolvers;
