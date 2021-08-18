import { Field, ObjectType } from '@nestjs/graphql';
import { table } from 'console';
import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne,RelationId, JoinColumn} from 'typeorm';
import { UsersModule } from '../../users/users.module';
import { CarsModule } from 'src/components/cars/cars.module';
import { User } from '../../users/entities/user';
import {Car} from'../../cars/entities/car'
import { IsDate} from 'class-validator';

@Entity({ name: 'orders' })
@ObjectType()

export class Order {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  
  @ManyToOne(() => User, user => user.orders, { onDelete: 'NO ACTION' })
  user: User;
 

  @JoinColumn()
  userId:String

  @Column()
  @Field()
  orderedCars: String;
  
  @Column()
  @Field()
  amount: number;

  // @Column()
  // @Field()
  // @IsDate()
  // endDate:Date


  // @Column()
  // @Field()
  // @IsDate()
  // orderDate: Date
  
  @Column()
  @Field()
  duration: number;

}