import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskModule } from './task/task.module';
import { TaskEntity, TaskSchema } from 'src/models/schemas/task.schema';
import { MachineModule } from './machine/machine.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/trade-machines'),
    MongooseModule.forFeature([{ name: TaskEntity.name, schema: TaskSchema }]),
    TaskModule,
    MachineModule,
  ],
})
export class AppModule {}
