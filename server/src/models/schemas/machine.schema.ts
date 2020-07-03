import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

@Schema({ collection: 'Machine', timestamps: true })
export class MachineEntity extends Document {
  @Prop()
  text: string;

  @Prop()
  description: string;

  @Exclude()
  @Prop()
  createAt: Date;
}

export const MachineSchema = SchemaFactory.createForClass(MachineEntity);
