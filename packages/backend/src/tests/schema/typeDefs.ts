import {gql} from 'apollo-server';


export const typeDefs = gql`
  type Place {
    placeName: String!
    state: String!
    stateAbbreviation: String!
  }

  type Address {
    id: ID!
    postcode: String!
    country: String!
    countryAbbreviation: String!
    places: Place!
  }

  type Query {
    findAddress(country: String!, zipcode: String!): Address!
  }
`