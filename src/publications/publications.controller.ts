import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Post()
  addPublication(@Body() data: CreatePublicationDTO) {
    return this.publicationsService.addPublication(data);
  }

  @Get()
  getPublications() {
    return this.publicationsService.getPublications(1);
  }
}
