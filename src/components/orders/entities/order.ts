import { Field, ObjectType } from '@nestjs/graphql';
import { table } from 'console';
import { type } from 'os';
import { Column, Entity, PrimaryGeneratedColumn,ManyToOne,RelationId, JoinColumn, OneToMany, ManyToMany, CreateDateColumn, AfterLoad, JoinTable} from 'typeorm';
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
  
  @Column()
  ownerId: string
  
  @ManyToOne(() => User, user => user.orders, { onDelete: 'CASCADE' })
  owner: User;


  @ManyToMany(() => Car, cars => cars.orders)
  cars: Car[]
  //lazy mode : Promise<Car[]>

  //to-do: make this fuctional with neworder.input
  addCars(cars: Car) {
    if (this.cars == null) {
      this.cars = new Array<Car>();
    }
    this.cars.push(cars)
  }
 

  @Column()
  @Field()
  orderedCars: string;
  
  @Column()
  @Field()
  amount: number;

  @Column()
  @Field()
  startDate: string;

  @Column()
  @Field()
  endDate: string;

  @CreateDateColumn()
  createTime: Date;

  @CreateDateColumn()
  updateTime:Date
  
  @Column()
  @Field()
  duration: number;

  // @AfterLoad()
  // formatTime() {
  //   const pattern = 'YYYY-MM-DD HH:mm:ss'
  //   this.startDate = moment(this.startDate).format(pattern)
  // }

}


