import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async signin(body: AuthSigninDTO) {
    const user = await this.usersRepository.findUserByEmail(body.email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const isPasswordValid = bcrypt.compareSync(body.password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Email or password invalid');

    return this.createToken(user);
  }
  async signpup(body: AuthSignupDTO) {
    const user = await this.usersService.addUser(body);
    return this.createToken(user);
  }
  createToken(user: AuthSignupDTO) {
    throw new Error('Method not implemented.');
  }
}
