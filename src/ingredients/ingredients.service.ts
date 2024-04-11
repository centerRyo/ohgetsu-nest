import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientsService {
  // constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    // const ingredients = await this.prisma.ingredients.findMany();

    // return ingredients;
    return 'Hello World!!!!!!!!!!!!!!!!!';
  }
}
