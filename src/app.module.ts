import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PublicationsModule } from './publications/publications.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PublicationsModule, UsersModule, PrismaModule, AuthModule],
})
export class AppModule {}
