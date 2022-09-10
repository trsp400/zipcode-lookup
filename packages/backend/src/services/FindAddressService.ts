import axios from "axios";
import {injectable} from "tsyringe";

import { AddressRequest } from "../interfaces/AddressRequestInterface";
import { Address } from "../models/Address";

@injectable()
export class FindAddressService {
  async execute({country, zipcode}: AddressRequest) {

    try {
      const {data} = await axios.get(`http://api.zippopotam.us/${country}/${zipcode}`)
    
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
      
      return address;
    } catch (error) {
      throw new Error("Request error")
    }
  }
}