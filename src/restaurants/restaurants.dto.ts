import { Expose } from 'class-transformer';
import { IsString, IsUUID } from 'class-validator';

export class RestaurantDto {
  @Expose()
  @IsUUID()
  id: string;

  /**
   * レストラン名
   */
  @Expose()
  @IsString()
  name: string;

  /**
   * レストランの画像URL
   */
  @Expose()
  @IsString()
  pic: string;
}
