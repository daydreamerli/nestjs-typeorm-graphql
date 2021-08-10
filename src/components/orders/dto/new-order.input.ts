import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { User } from '../../users/entities/user';
import { Car } from '../../cars/entities/car';
import { RelationId } from 'typeorm';
import { CarsModule } from '../../cars/cars.module';


@InputType()
export class NewOrderInput {

  
  @Field()
  username: String;

  
  @Field()
  @Min(20)  
  amount: number;

  
  @Field()
  @Min(1)
  @Max(120)
  duration: number;
  
  
  @Field()
  orderedCars: String;

}