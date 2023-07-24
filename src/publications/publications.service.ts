import { Injectable } from '@nestjs/common';
import { PublicationsRepository } from './repository/publications.repository';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationsService {
  constructor(private readonly publicationRepository: PublicationsRepository) {}

  async addPublication(data: CreatePublicationDTO) {
    await this.publicationRepository.addPublication({ ...data, userId: 1 });
  }

  async getPublications(id: number) {
    return await this.publicationRepository.getPublications(id);
  }
}
