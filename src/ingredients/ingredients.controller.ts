import { Controller, Get } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}
  @Get()
  async findAll() {
    const ingredients = await this.ingredientsService.findAll();

    return ingredients;
  }
}
