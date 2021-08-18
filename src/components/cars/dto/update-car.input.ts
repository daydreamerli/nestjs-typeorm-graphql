import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class UpdateCarInput {

  @Field((type) => Int)
  @Max(9000)
  @Min(900)
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(800)
  @Min(10, { message: "Daily price can't be that low!" })
  dailyPrice: number;

  @Field()
  mileage: string;

  @Field((type) => Int)
  @Max(100, { message: "we are not No#1 in NZ" })
  @Min(2)
  quantity: number;

}
