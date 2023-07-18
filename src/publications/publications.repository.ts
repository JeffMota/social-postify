import { Injectable } from '@nestjs/common';
import { PrismaClient, Publication } from '@prisma/client';

export class PublicationsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addPublication(data: Omit<Publication, 'id' | 'createdAt'>) {
    await this.prisma.publication.create({ data: data });
  }

  async getPublications(id: number) {
    return await this.prisma.publication.findMany({ where: { userId: id } });
  }
}
