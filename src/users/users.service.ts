import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(_uuid: number): Promise<User> {
    return await this.usersRepository.findOneBy({ uuid: _uuid });
  }

  async updateUser(user: User) {
    this.usersRepository.save(user);
  }

  async createUser(user: User) {
    try {
      return await this.usersRepository.insert(user);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}
