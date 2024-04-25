import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantDto } from './restaurants.dto';
import { CreateRestaurantDto } from './create-restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  @Get()
  async findAll(): Promise<RestaurantDto[]> {
    const restaurants = await this.restaurantsService.findAll();

    return restaurants.map((restaurant) => new RestaurantDto(restaurant));
  }

  @Post()
  async create(@Body() data: CreateRestaurantDto): Promise<RestaurantDto> {
    const restaurant = await this.restaurantsService.create(data);

    return new RestaurantDto(restaurant);
  }
}
