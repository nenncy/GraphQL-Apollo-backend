const { getAllUsers, getUserById, createUser } = require('../../model/userModel');

const userResolvers = {
  Query: {
    getUsers: async () => await getAllUsers(),
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => await createUser(name, email, password),
  },
};

module.exports = userResolvers;
