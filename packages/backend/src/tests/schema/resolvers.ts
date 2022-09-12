import { AddressRequest } from "../../interfaces/AddressRequestInterface";
import { FindAddressService } from "../../services/FindAddressService";

export const resolvers = {
  Query: {
    findAddress: async (_: any, {country, zipcode}: AddressRequest) => {
      const findAddressService = new FindAddressService();
      const address = findAddressService.execute({country, zipcode})
  
      return address;
    }
  }
}