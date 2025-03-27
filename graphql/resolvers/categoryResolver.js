const { getAllcategory, addCategory } = require('../../model/categoryModel');

const resolvers = {
  Query: {
    getCategories: async () => await getAllcategory(),
  },
  Mutation: {
    addCategory: async (_, { name, type, color }) => {
      return await addCategory(name, type, color);
    }
  }
};

module.exports = resolvers;
