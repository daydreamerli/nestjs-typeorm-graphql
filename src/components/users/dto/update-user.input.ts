import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class UpdateUserInput {

  
  @Field()
  username: string;


  @Field((type) => String)
  @Max(512, { message: "Too much security!" })
  @Min(6,{message: "password too short" })
  password: string;
  
  

}