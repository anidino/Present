const { AuthenticationError } = require("apollo-server-express");
const { User, Photo } = require("../models");

// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().sort({ createdAt: -1 });
    },
    // photos: async (parent, { imageLink }) => {
    //   const params = imageLink ? { imageLink } : {};
    //   return Photo.find(params).sort({ createdAt: -1 });
    // },
  },
};

module.exports = resolvers;
