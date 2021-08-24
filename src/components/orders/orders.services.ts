import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository,createConnection } from 'typeorm';
import { NewOrderInput } from './dto/new-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order';
import { Args, Int } from '@nestjs/graphql';
import { User } from '../users/entities/user';
import { UsersService } from '../users/users.services';
import { connect } from 'http2';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) { }

  public async getAllOrders(): Promise<Order[]> {
    
    return await this.orderRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }


  public async getUserOrders(userId:string): Promise<Order[]> {
    createConnection().then(async connection => {
      console.log("make a new connect to db now for user's order query")
      const userRepository = connection.getRepository(User)
      const orderUer =  await userRepository.findOne(userId)
    })
    return await this.orderRepository.find({ relations: ['OrderUser'] }).catch((err) => {
      throw new InternalServerErrorException();
    });
  }  

  public async deleteAllOrders(): Promise<Boolean> {
    
     await this.orderRepository.delete({}).catch((err) => {
       throw new InternalServerErrorException();
     });
     return true;
  }

  public async addOrder(NewOrderData: NewOrderInput): Promise<Order> {

    const newOrder = this.orderRepository.create(NewOrderData);

    await this.orderRepository.save(newOrder).catch((err) => {
      new InternalServerErrorException();
    });
    let userid = NewOrderData.userId;
    createConnection().then(async connection => {
      console.log("connect to db now to save the new order to user")
      const userRepository = connection.getRepository(User)
      const orderUser = await userRepository.findOne(userid)
      orderUser.addOrder(newOrder)
    })

    return newOrder;
  }




}