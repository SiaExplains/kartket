import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskModule } from './task/task.module';
import { TaskEntity, TaskSchema } from 'src/models/schemas/task.schema';
import { MachineModule } from './machine/machine.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/trade-machines'),
    MongooseModule.forFeature([{ name: TaskEntity.name, schema: TaskSchema }]),
    TaskModule,
    MachineModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
