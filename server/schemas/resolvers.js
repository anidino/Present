const { AuthenticationError } = require("apollo-server-express");
const { User, Photo } = require("../models");
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
      //   .populate("photos");
      // .populate("songs");
    },
  },
};
