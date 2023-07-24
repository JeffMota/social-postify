import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { PublicationsRepository } from './repository/publications.repository';
import { PrismaPublicationsRepository } from './repository/implementations/PrismaPublications.repository';

@Module({
  controllers: [PublicationsController],
  providers: [
    PublicationsService,
    { provide: PublicationsRepository, useClass: PrismaPublicationsRepository },
  ],
})
export class PublicationsModule {}
