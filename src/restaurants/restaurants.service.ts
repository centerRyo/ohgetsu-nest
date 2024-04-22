import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    const restaurants = await this.prisma.restaurants.findMany();

    return restaurants;
  }
}
