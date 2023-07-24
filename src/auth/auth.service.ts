import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/users/repository/users.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
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

  createToken(user: User) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      {
        expiresIn: '1 day',
        subject: String(user.id),
        issuer: 'Atom',
        audience: 'users',
      },
    );

    return { token };
  }
}
