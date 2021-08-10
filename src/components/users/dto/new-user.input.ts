import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewUserInput {

  
  @Field()
  username: string;

  
  @Field()
  email: string;

  
  @Field()
  password: string;
  
  
  @Field()
  country: string;

}