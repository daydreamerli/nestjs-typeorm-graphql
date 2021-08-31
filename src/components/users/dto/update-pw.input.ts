import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class changeUserPWInput {
  
  
  @Field()
  currPass: string
  
  @Field()
  newPass: string;

}