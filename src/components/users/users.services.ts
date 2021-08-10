import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user';
import { Int } from '@nestjs/graphql';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  public async getAllUsers(): Promise<User[]> {
    
    return await this.userRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async findByUsername(username:string) :Promise<User>{
    
    return await this.userRepository.findOne({ username });
    
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

  public async deleteUser(email:string):Promise<Boolean>{
    
    await this.userRepository.delete({ email });
    
    return true;
    
  }


}