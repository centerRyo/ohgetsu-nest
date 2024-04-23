import { Controller, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantDto } from './restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  @Get()
  async findAll(): Promise<RestaurantDto[]> {
    const restaurants = await this.restaurantsService.findAll();

    return restaurants;
  }
}
