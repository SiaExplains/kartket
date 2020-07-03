import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskSchema, TaskEntity } from '../../models/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/trade-machines'),
    MongooseModule.forFeature([{ name: TaskEntity.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
