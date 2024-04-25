import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRestaurantDto } from './create-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const restaurants = await this.prisma.restaurants.findMany({
      include: {
        genre: true,
      },
    });

    return restaurants;
  }

  async create(data: CreateRestaurantDto) {
    const restaurant = await this.prisma.restaurants.create({
      data,
    });

    return restaurant;
  }
}
