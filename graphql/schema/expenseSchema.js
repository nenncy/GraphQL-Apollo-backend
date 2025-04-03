const { gql } = require('apollo-server-express');

const expenseSchema = gql`
  type Expense {
    id: ID!
    title: String!
    amount: Float!
    category_id: Int
    date: String!
    notes: String
    created_at: String
  }

  type Query {
    getAllExpenses: [Expense]
  }

  type Mutation {
    addExpense(
      title: String!
      amount: Float!
      category_id: Int
      date: String!
      notes: String
    ): Expense

    deleteExpense(id: ID!): Boolean

    updateExpense(
      id: ID!
      title: String!
      amount: Float!
      category_id: Int
      date: String!
      notes: String
    ): Expense
  }
`;

module.exports = expenseSchema;
