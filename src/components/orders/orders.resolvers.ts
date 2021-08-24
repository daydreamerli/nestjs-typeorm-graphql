import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Console } from 'console';
import { OrdersService } from './orders.services';
import { NewOrderInput } from './dto/new-order.input';
import { Order } from './entities/order';


@Resolver()
export class OrdersResolver {
  constructor(private orderService: OrdersService) { }
  
  @Query((returns) => [Order])
  public async getAllOrders(): Promise<Order[]> {
    return await this.orderService.getAllOrders().catch((err) => {
      throw err;
    });
  }

  @Query((returns) => [Order])
  public async getUserOrders(@Args('userId') userId:string): Promise<Order[]> {
    return await this.orderService.getUserOrders(userId).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Order)
  public async addNewOrder(
    @Args('newOrderData') newOrderData: NewOrderInput,
  ): Promise<Order> {
    return await this.orderService.addOrder(newOrderData).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Boolean)
  public async deleteAllOrders(){
     await this.orderService.deleteAllOrders().catch((err) => {
      throw err;
    });
  }
  


}