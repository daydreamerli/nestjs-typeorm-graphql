import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository,createConnection,Connection } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user';
import {Order} from '../orders/entities/order'
import { Int } from '@nestjs/graphql';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  public async getAllUsers(): Promise<User[]> {
    
    return await this.userRepository.find().catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async findByUsername(email:string) :Promise<User>{
    
    return await this.userRepository.findOne({ email},{relations:['orders']});
    
  }

  public async addUser(newUserData: NewUserInput): Promise<User> {

    const newUser = this.userRepository.create(newUserData);

    await this.userRepository.save(newUser).catch((err) => {
      new InternalServerErrorException();
    });

    return newUser;
  }
  

  public async updateUserInfo(email: string, updateUserData: UpdateUserInput): Promise<User> {
    
    await this.userRepository.update(email,
      {
        username: updateUserData.username,
        password:updateUserData.password
      });
    
    const updatedUser = await this.userRepository.findOne({ email });

    return updatedUser;
  }

  public async deleteUser(email: string){
    
    await this.userRepository.delete({ email }).catch((err) => {
      throw new InternalServerErrorException()
    });
  
      return true;
    
    
  }

  public async deleteAllUsers(){
    
    await this.userRepository.delete({}).catch((err) => {
      throw new InternalServerErrorException();
    });
    
    return true;
    
  }


}