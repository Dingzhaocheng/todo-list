import { Module } from '@nestjs/common';
import { studentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [studentController],
  providers: [StudentService],
})
export class studentModule {}
