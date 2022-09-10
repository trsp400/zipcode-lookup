import { container } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';
import { Address } from '../models/Address';
import { FindAddressService } from '../services/FindAddressService';

@Resolver()
export class AddressResolver {
  @Query(() => Address)
  async findAddress(
    @Arg('zipcode') zipcode: string,
    @Arg('country') country: string
  ) {
    const findAddressService = container.resolve(FindAddressService)
    const address = findAddressService.execute({country, zipcode})

    return address;
  }
}
