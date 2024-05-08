import { Test, TestingModule } from '@nestjs/testing';
import { MenusService } from './menus.service';
import { AppModule } from '../app.module';
import { MenusModule } from './menus.module';
import { PrismaService } from '../prisma.service';

describe('MenusService', () => {
  let service: MenusService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MenusModule, AppModule],
    }).compile();

    service = await module.resolve<MenusService>(MenusService);

    prisma = module.get<PrismaService>(PrismaService);
  });

  it('メニューが作成できる', async () => {
    const restaurant = await prisma.restaurants.findFirst();
    const ingredient = await prisma.ingredients.findFirst();

    const data = await service.create({
      restaurantId: restaurant.id,
      menus: [
        {
          name: 'カレー',
          pic: null,
          ingredients: [ingredient],
        },
      ],
    });

    expect(data[0].name).toBe('カレー');
  });
});
