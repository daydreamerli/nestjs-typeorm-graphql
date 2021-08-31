import { Field, InputType, Int } from '@nestjs/graphql';


@InputType()
export class userLoginInput {

 
  @Field()
  email: string;

  @Field()
  password: string;
  

}