import { Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';
import { IngredientDto } from 'src/ingredients/ingredients.dto';

export class MenuDto {
  constructor(partial: Partial<MenuDto>) {
    Object.assign(this, partial);
  }

  @Expose()
  @IsUUID()
  id: string;

  /**
   * メニュー名
   */
  @Expose()
  name: string;

  /**
   * 写真
   */
  @Expose()
  @IsString()
  pic: string | null;

  /**
   * アレルゲン情報
   */
  @Expose()
  ingredients: IngredientDto[];
}
