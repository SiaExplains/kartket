// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { MachineController } from './machine.controller';
// import { MachineService } from './machine.service';
// import {
//   MachineSchema,
//   MachineEntity,
// } from 'src/models/schemas/machine.schema';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017/trade-machines'),
//     MongooseModule.forFeature([
//       { name: MachineEntity.name, schema: MachineSchema },
//     ]),
//   ],
//   controllers: [MachineController],
//   providers: [MachineService],
// })
// export class MachineModule {}
