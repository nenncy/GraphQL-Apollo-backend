require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const {typeDefs , resolvers }= require("./graphql/index")

// Initialize Express
const app = express();
app.use(cors());

// Setup Apollo Server
const server = new ApolloServer({typeDefs: typeDefs , resolvers: resolvers});
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer();
