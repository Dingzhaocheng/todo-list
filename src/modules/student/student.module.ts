import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentController } from './student.controller';
import { StudentService } from './student.service';
import {StudentEntity} from './student.entity'

@Module({
  imports:[TypeOrmModule.forFeature([StudentEntity])],
  controllers: [studentController],
  providers: [StudentService],
})
export class studentModule {}
