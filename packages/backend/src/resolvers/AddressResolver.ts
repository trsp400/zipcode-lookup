import { Arg, Query, Resolver } from 'type-graphql';
import axios from 'axios'
import { Address } from '../models/Address';

interface AddressRequest {
  country: String;
  zipcode: String;
}

@Resolver()
export class AddressResolver {

  @Query(() => Address)
  async findAddress(
    @Arg('zipcode') zipcode: string,
    @Arg('country') country: string
  ) {
    const {data} = await axios.get(`http://api.zippopotam.us/${country}/${zipcode}`)

    console.log(data)

    const address: Address = {
      country: data.country,
      countryAbbreviation: data['country abbreviation'],
      postcode: data['post code'],
      places: {
        placeName: data.places[0]['place name'],
        state: data.places[0].state,
        stateAbbreviation: data.places[0]['state abbreviation']
      }
    }

    console.log(address)
    return address;
  }
}