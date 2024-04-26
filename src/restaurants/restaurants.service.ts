import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { UpdateRestaurantDto } from './update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const restaurants = await this.prisma.restaurants.findMany({
      where: {
        deletedAt: null,
      },
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

  async update(id: string, data: UpdateRestaurantDto) {
    const restaurant = await this.prisma.restaurants.update({
      where: { id },
      data,
    });

    return restaurant;
  }

  async delete(id: string) {
    return await this.prisma.restaurants.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
