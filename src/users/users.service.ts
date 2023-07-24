import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './repository/users.repository';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async addUser(body: CreateUserDTO): Promise<User> {
    const hashPassword = bcrypt.hashSync(body.password, 10);

    const user = await this.userRepository.findUserByEmail(body.email);
    if (user)
      throw new HttpException('This email already exists', HttpStatus.CONFLICT);

    return await this.userRepository.addUser({
      ...body,
      password: hashPassword,
    });
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.userRepository.findAllUsers();
    if (!users) throw new NotFoundException('Users not found');
    return users;
  }
}
