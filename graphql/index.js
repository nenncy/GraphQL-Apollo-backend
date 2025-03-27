const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const userSchema = require('./schema/userSchema');
const userResolvers = require('./resolvers/userResolvers');
const categorySchema =  require('./schema/categorySchema')
const categoryResolvers =  require('./resolvers/categoryResolver')


const typeDefs = mergeTypeDefs([userSchema , categorySchema]);
const resolvers = mergeResolvers([userResolvers ,categoryResolvers]);

module.exports = { typeDefs, resolvers };
