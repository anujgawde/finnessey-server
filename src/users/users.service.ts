import { Inject, Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}
  async getUsers() {
    const abc = await this.usersRepository.find();
    return this.usersRepository.find();
  }
}
