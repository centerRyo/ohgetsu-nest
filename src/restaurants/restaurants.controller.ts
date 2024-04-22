import { Controller, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}
  @Get()
  async findAll() {
    const restaurants = await this.restaurantsService.findAll();

    return restaurants;
  }
}
