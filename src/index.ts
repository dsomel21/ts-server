import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";

createConnection()
  .then(async connection => {
    console.log(`Connected to database: ${connection.isConnected}.`);
  })
  .catch(error => console.log(error));

// GraphQL Schema Situation
const typeDefs = importSchema("schema.graphql");

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
