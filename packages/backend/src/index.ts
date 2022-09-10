import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "path";

import { buildSchema } from "type-graphql";
import { AddressResolver } from "./resolvers/AddressResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [AddressResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({ schema });
  
  server.listen().then(({url}) => {
    console.log("API runnning on: " + url)
  })
}

main()
