import { Index, Entity, Tree, Column, TreeChildren, TreeParent } from 'typeorm';

import { BaseModel } from './_base.entity';

@Entity('categories')
@Index('categories_name_unique', ['name'], { unique: true })
@Index('categories_slug_unique', ['slug'], { unique: true })
@Tree('nested-set')
export class CategoryEntity extends BaseModel {
  @Column({ type: 'nvarchar', length: 64, unique: true })
  name!: string | null;

  @Column({ type: 'nvarchar', length: 64, unique: true })
  slug!: string;

  @Column({ type: 'varchar', nullable: true })
  parentId!: string | null;

  @Column({ type: 'nvarchar', nullable: true })
  description?: string;

  @TreeChildren()
  children?: CategoryEntity[] | null;

  @TreeParent()
  parent?: CategoryEntity | null;
}
