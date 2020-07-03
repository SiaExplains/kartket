import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

@Schema({ collection: 'Todo', timestamps: true })
export class TaskEntity extends Document {
  @Prop()
  text: string;

  @Prop()
  isCompleted: boolean;

  @Exclude()
  @Prop()
  createAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(TaskEntity);
