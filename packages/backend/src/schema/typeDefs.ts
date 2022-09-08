import { gql } from "apollo-server";

export const typeDefs = gql`
  type Address {
    id: ID!
    zipcode: String!
    street: String!
  }
  
  type Query {
    addresses: [Address]!
  }
`