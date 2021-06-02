const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema/schema");
const resolvers = require("./src/resolvers/resolver");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server
  .listen()
  .then(({ url }) => console.log("Server is running on http://localhost:4000"));
