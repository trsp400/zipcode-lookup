import { AddressList } from "../fakedata"

export const resolvers = {
  Query: {
    addresses() {
      return AddressList;
    }
  }
}