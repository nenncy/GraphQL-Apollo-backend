const {
    getAllExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  } = require('../../model/expenseModel');
  
  const expenseResolvers = {
    Query: {
      getAllExpenses: async () => await getAllExpenses(),
    },
    Mutation: {
      addExpense: async (_, args) =>
        await addExpense(args.title, args.amount, args.category_id, args.date, args.notes),
  
      deleteExpense: async (_, { id }) => await deleteExpense(id),
  
      updateExpense: async (_, args) =>
        await updateExpense(args.id, args.title, args.amount, args.category_id, args.date, args.notes),
    },
  };
  
  module.exports = expenseResolvers;
  