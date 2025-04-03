const { gql } = require('apollo-server-express');

const incomeSchema = gql`
  type Income {
    id: ID!
    title: String!
    amount: Float!
    category_id: Int
    date: String!
    notes: String
    created_at: String
  }

  type Query {
    getAllIncome: [Income]
  }

  type Mutation {
    addIncome(
      title: String!
      amount: Float!
      category_id: Int
      date: String!
      notes: String
    ): Income

    deleteIncome(id: ID!): Boolean

    updateIncome(
    id: ID!
    title: String!
    amount: Float!
    category_id: Int
    date: String!
    notes: String
  ): Income
  }
`;

module.exports = incomeSchema;
