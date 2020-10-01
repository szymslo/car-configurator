const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const MONGODB_URI =
  "mongodb+srv://m001-student:student@sandbox.266ah.mongodb.net/configurator?retryWrites=true&w=majority";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 MongoDB connected. Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
