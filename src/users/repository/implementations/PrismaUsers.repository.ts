import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }

  async addUser(body: CreateUserDTO): Promise<User> {
    return await this.prisma.user.create({ data: body });
  }

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
