import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository } from 'typeorm';
import { NewOrderInput } from './dto/new-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order';
import { Int } from '@nestjs/graphql';
import { User } from '../users/entities/user';
import { UsersService } from '../users/users.services';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) { }

  public async getAllOrders(): Promise<Order[]> {
    
    return await this.orderRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }



  public async addOrder(NewOrderData: NewOrderInput): Promise<Order> {

    const newOrder = this.orderRepository.create(NewOrderData);

    await this.orderRepository.save(newOrder).catch((err) => {
      new InternalServerErrorException();
    });

    return newOrder;
  }


}