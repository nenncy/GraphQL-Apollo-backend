const {
    getAllIncome,
    addIncome,
    deleteIncome,
    updateIncome
  } = require('../../model/incomeModel');
  
  const incomeResolvers = {
    Query: {
      getAllIncome: async () => await getAllIncome()
    },
    Mutation: {
      addIncome: async (_, args) =>
        await addIncome(args.title, args.amount, args.category_id, args.date, args.notes),
      deleteIncome: async (_, { id }) => await deleteIncome(id),

      updateIncome: async (_, args) =>
        await updateIncome(args.id, args.title, args.amount, args.category_id, args.date, args.notes)
    }
  };
  
  module.exports = incomeResolvers;
  