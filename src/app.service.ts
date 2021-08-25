import { Get, Injectable } from '@nestjs/common';
import { UsersService } from './components/users/users.services';

@Injectable()
export class AppService {
  getAllUsers: any;
  getHello(): string {
    return 'Hello World!';
  }
}
