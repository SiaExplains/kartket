import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from '../../models/schemas/task.schema';
import { Task_DTO } from 'src/models/dtos/task/task.dto';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAll(): Promise<any> {
    return (await this.taskService.findAll()).map(task => {
      let obj = new Task_DTO();
      obj.id = task.id;
      obj.isCompleted = task.isCompleted;
      obj.text = task.text;
      return obj;
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.taskService.deleteOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: Task_DTO) {
    return this.taskService.update(id, request);
  }

  @Post()
  @HttpCode(200)
  async create(@Body() request: Task_DTO): Promise<Task_DTO> {
    try {
      request.isCompleted = false;
      let d = await this.taskService.create(request);
      let obj = new Task_DTO();
      obj.id = d.id;
      obj.isCompleted = d.isCompleted;
      obj.text = d.text;
      return obj;
    } catch (ex) {
      return null;
    }
  }
}
