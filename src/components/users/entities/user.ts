import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, Length, minLength } from 'class-validator';
import { type } from 'os';
import { Order } from 'src/components/orders/entities/order';
import { Column, Entity, PrimaryGeneratedColumn ,OneToMany} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()

export class User {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ nullable: false })
  @Field()
  username: string;

  @Column({ length: 128,nullable: false })
  @Field()
  @IsEmail()
  email: string;

  @Column({ length: 512, nullable: false })
  @Field()
  @Length(6,512)
  password: string;

  @Field((type) => [Order],{nullable:true})
  @OneToMany(() => Order,order => order.user,{onDelete: 'NO ACTION'})
  orders: Order[]
  
  @Column({nullable:true})
  @Field()
  country: string;

  @Column({ length: 512, nullable: true })
  @Field()
  thumbnailUrl: string;
  
  
}