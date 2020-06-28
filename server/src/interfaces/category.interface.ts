import { FindOneOptions } from 'typeorm';
import { CategoryGetOneReq } from '@leaa/api/src/dtos/category';
import { CategoryEntity } from '../models/entities/category.entity';

export type ICategoryArgs = CategoryGetOneReq & FindOneOptions<Category>;

export type ICategoriesQuery = {
  expanded?: boolean;
  parentSlug?: string;
  parentId?: string;
};
