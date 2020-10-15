import { Controller, Get, Param } from '@nestjs/common';
import {StudentService } from './student.service';

@Controller('student')
export class studentController {
  constructor(private readonly studentService: StudentService) {}

  @Get(':id')
  getName(@Param() params): string {
    return this.studentService.getName(params.id);
  }


}

