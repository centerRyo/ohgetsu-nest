import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateMenuDto } from './create-menu.dto';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  @ApiOperation({
    summary: 'アレルギー情報を含んだメニューを作成する',
  })
  async create(@Body() data: CreateMenuDto) {
    const menus = await this.menusService.create(data);

    return menus;
  }
}
