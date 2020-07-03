import { Injectable } from '@nestjs/common';
import { Machine_DTO } from '../../models/dtos/machine/machine';
import {
  MachineEntity,
  MachineSchema,
} from 'src/models/schemas/machine.schema';
import { exception } from 'console';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(MachineEntity.name) private machineModel: Model<MachineEntity>,
  ) {}

  async create(request: Machine_DTO): Promise<MachineEntity> {
    const createdMachine = new this.machineModel(request);
    return createdMachine.save();
  }

  async findAll(): Promise<MachineEntity[]> {
    return this.machineModel.find().exec();
  }

  async findOne(id: string): Promise<MachineEntity> {
    return this.machineModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<any> {
    return this.machineModel.deleteOne({ _id: id }).exec();
  }

  async update(id: string, entity: Machine_DTO): Promise<any> {
    return this.machineModel
      .findByIdAndUpdate(
        { _id: id },
        { _id: id, text: entity.text, isCompleted: entity.description },
      )
      .exec();
  }
}
