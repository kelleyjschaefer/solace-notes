import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id: _id });
  }

  async updateUser(user: User) {
    this.usersRepository.save(user);
  }

  async createUser(user: User) {
    this.usersRepository.create(user);
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }
}