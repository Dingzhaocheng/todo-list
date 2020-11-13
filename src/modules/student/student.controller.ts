import {
  Controller,
  Get,
  Req,
  Put,
  Param,
  Post,
  Body,
  Delete,
  Inject,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { CreateStudentDto } from './dto/student.dto';
import { Result } from '../../common/result.interface';

@Controller('student')
export class StudentController {
  constructor(
    @Inject(StudentService) private readonly studentService: StudentService,
  ) {}

  @Get()
  async getList(): Promise<Result> {
    const res = await this.studentService.getStudentsList();
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Get(':id')
  async getStudent(@Param('id') id): Promise<Result> {
    const res = await this.studentService.getStudent(id);

    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Post()
  async saveStudent(@Body() P: StudentEntity): Promise<Result> {
    const createStudent = await this.studentService.saveStudent(P);

    return {
      code: 200,
      message: 'success',
      data: createStudent,
    };
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() P: StudentEntity,
  ): Promise<Result> {
    const res = await this.studentService.updateStudent(id, P);
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Delete(':id')
  async destroy(@Param('id') id): Promise<Result> {
    const res = await this.studentService.destroyStudent(id);
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }
}
