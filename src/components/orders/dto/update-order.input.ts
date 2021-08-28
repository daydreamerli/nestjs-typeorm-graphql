import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';


@InputType()
export class UpdateOrderInput {


  @Field()
  @Min(1)
  @Max(120)
  duration: number;
  
  
  @Field()
  orderedCars: String;

  @Field(() => Date)
  updateOrderDate:String

}