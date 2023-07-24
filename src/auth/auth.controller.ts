import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthSigninDTO) {
    return await this.authService.signin(body);
  }

  @Post('signup')
  async signup(@Body() body: AuthSignupDTO) {
    return await this.authService.signpup(body);
  }
}
