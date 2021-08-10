import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [CarsModule,UsersModule,OrdersModule]
})
export class ComponentsModule {}