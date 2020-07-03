import { Injectable } from '@nestjs/common';
import { Task_DTO } from '../../models/dtos/task/task.dto';
import { TaskEntity, TaskSchema } from 'src/models/schemas/task.schema';
import { exception } from 'console';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskEntity.name) private taskModel: Model<TaskEntity>,
  ) {}

  async create(request: Task_DTO): Promise<TaskEntity> {
    const createdTask = new this.taskModel(request);
    return createdTask.save();
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<TaskEntity> {
    return this.taskModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<any> {
    return this.taskModel.deleteOne({ _id: id }).exec();
  }

  async update(id: string, entity: Task_DTO): Promise<any> {
    return this.taskModel
      .findByIdAndUpdate(
        { _id: id },
        { _id: id, text: entity.text, isCompleted: entity.isCompleted },
      )
      .exec();
  }
}
