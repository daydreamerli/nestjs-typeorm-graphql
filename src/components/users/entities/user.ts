import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, Length, minLength } from 'class-validator';
import { type } from 'os';
import { Order } from 'src/components/orders/entities/order';
import { Column, Entity, PrimaryGeneratedColumn ,OneToMany, JoinColumn, BaseEntity} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()

export class User  extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ nullable: false })
  @Field()
  username: string;

  @Column({ unique:true,nullable: false })
  @Field()
  @IsEmail()
  email: string;

  @Column({ length: 512, nullable: false })
  @Field()
  @Length(6,512)
  password: string;

  
  @OneToMany(() => Order, order => order.owner, { cascade: true })
  @JoinColumn()
  orders: Order[]
  

  addOrder(order: Order) {
    if (this.orders == null) {
      this.orders = new Array<Order>();
    }
    this.orders.push(order)
  }
  
  @Column({nullable:true})
  @Field()
  country: string;

  @Column({ length: 512, nullable: true })
  @Field()
  thumbnailUrl: string;
  
  
}