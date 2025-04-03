const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const userSchema = require('./schema/userSchema');
const userResolvers = require('./resolvers/userResolvers');
const categorySchema =  require('./schema/categorySchema');
const categoryResolvers =  require('./resolvers/categoryResolver');
const incomeSchema = require ('./schema/incomeSchema')
const incomeResolvers = require('./resolvers/incomeResolver')
const expenseSchema = require('./schema/expenseSchema');
const expenseResolvers = require('./resolvers/expenseResolver');

const typeDefs = mergeTypeDefs([userSchema , categorySchema, incomeSchema,expenseSchema]);
const resolvers = mergeResolvers([userResolvers ,categoryResolvers, incomeResolvers,expenseResolvers]);

module.exports = { typeDefs, resolvers };
