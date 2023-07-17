import { Injectable } from '@nestjs/common';
import { User } from './entity/User';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users: User[] = [];

  addUser(body: CreateUserDTO) {
    const user = new User(body.name, body.email, body.password);
    return this.users.push(user);
  }

  findAllUsers() {
    return this.users;
  }
}
