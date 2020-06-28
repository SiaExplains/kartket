import { IsNotEmpty } from 'class-validator';
import { CategoryEntity } from '../../entities/category.entity';

export class CategoryCreateOnReq {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  slug!: string;

  parentId?: string;

  description?: string;

  parent: CategoryEntity | null;
}
