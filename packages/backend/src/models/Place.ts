import {Field, ID, ObjectType} from 'type-graphql'


@ObjectType()
export class Place {
  @Field()
  placeName: string;

  @Field()
  state: string;

  @Field()
  stateAbbreviation: string;
}