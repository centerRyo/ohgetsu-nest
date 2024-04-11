import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [IngredientsService, PrismaService],
  controllers: [IngredientsController],
  exports: [IngredientsService],
})
export class IngredientsModule {}
