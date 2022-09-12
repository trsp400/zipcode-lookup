import "reflect-metadata"
import path from 'path';

import {graphql} from 'graphql';
import {makeExecutableSchema} from '@graphql-tools/schema'
import {resolvers} from '../schema/resolvers'
import { typeDefs } from "../schema/typeDefs";

const schema = makeExecutableSchema({ typeDefs, resolvers })

export const graphqlTestCall = async (query: string, variables?: any) => {
  return graphql(
    schema,
    query,
    undefined,
    {},
    variables,
  )
}