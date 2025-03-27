const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    id: ID!
    name: String!
    type: String!
    color: String
    created_at: String
}

type Query {
    getCategories: [Category]
  }
type Mutation{
 addCategory(name: String!, type: String!, color: String): Category
}
`
module.exports = typeDefs;
