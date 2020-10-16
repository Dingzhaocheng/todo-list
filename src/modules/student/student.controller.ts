import { Controller, Get, Req, Param, Post, Body } from '@nestjs/common';
import {StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import {CreateStudentDto} from './dto/student.dto'



@Controller('student')
export class studentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getList(): Promise<any> {
    return this.studentService.getStudentsList()
  }

  @Get(':id')
  getStudent():Promise<any>{
    return  this.studentService.getStudent()
  }

  @Post()
  async saveStudent(@Body() P:StudentEntity):Promise<any>{
      const createStudent = await  this.studentService.saveStudent(P)
      return {
        P:createStudent
      }
  }

}

