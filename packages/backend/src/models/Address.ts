import {Field, ObjectType} from 'type-graphql'

import { Place } from './Place';

@ObjectType()
export class Address {
  
  @Field()
  postcode: string;

  @Field()
  country: string;

  @Field()
  countryAbbreviation: string;

  @Field(_type => Place)
  places: Place

}