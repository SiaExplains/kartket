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

import { MachineService } from './machine.service';
import {
  MachineEntity,
  MachineSchema,
} from 'src/models/schemas/machine.schema';
import { Machine_DTO } from '../../models/dtos/machine/machine';

@Controller('api/v1/machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Get()
  async getAll(): Promise<any> {
    return (await this.machineService.findAll()).map(machine => {
      let obj = new Machine_DTO();
      obj.id = machine.id;
      obj.description = machine.description;
      obj.text = machine.text;
      return obj;
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.machineService.deleteOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() request: Machine_DTO) {
    return this.machineService.update(id, request);
  }

  @Post()
  @HttpCode(200)
  async create(@Body() request: Machine_DTO): Promise<Machine_DTO> {
    try {
      let d = await this.machineService.create(request);
      let obj = new Machine_DTO();
      obj.id = d.id;
      obj.description = d.description;
      obj.text = d.text;
      return obj;
    } catch (ex) {
      return null;
    }
  }
}
