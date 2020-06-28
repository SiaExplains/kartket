import { PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export class BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'timestamp', nullable: true, select: false })
  deletedAt?: Date;
}
