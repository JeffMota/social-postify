import { Publication } from '@prisma/client';

export abstract class PublicationsRepository {
  abstract addPublication(
    data: Omit<Publication, 'id' | 'createdAt'>,
  ): Promise<void>;

  abstract getPublications(id: number): Promise<Publication[]>;
}
