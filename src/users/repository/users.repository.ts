import { User } from '@prisma/client';
import { CreateUserDTO } from '../dto/create-user.dto';

export abstract class UsersRepository {
  abstract findUserByEmail(email: string): Promise<User>;
  abstract addUser(body: CreateUserDTO): Promise<any>;
  abstract findAllUsers(): Promise<User[]>;
}
