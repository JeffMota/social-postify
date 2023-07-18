import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './repository/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async addUser(body: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(body.password, 10);

    const user = await this.userRepository.findUserByEmail(body.email);
    if (user)
      throw new HttpException('This email already exists', HttpStatus.CONFLICT);

    await this.userRepository.addUser({
      ...body,
      password: hashPassword,
    });
  }

  async findAllUsers() {
    return await this.userRepository.findAllUsers();
  }
}
