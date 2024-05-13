// node-graphql/src/index.js

const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolver");

const port = process.env.PORT || 3001;

const server = new ApolloServer({ resolvers, typeDefs });

// GUIDE IS HERE--------------
// https://dev.to/nditah/how-to-build-a-graphql-api-with-node-prisma-and-postgres-ajg

server.listen({ port }, () =>
  console.log(`Server runs at: http://localhost:${port}`)
);
