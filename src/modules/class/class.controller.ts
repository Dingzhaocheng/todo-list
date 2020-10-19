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
import { classService } from './class.service';
import { classEntity } from './class.entity';
import { CreateClassDto } from './dto/class.dto';
import { Result } from '../../common/result.interface';

@Controller('class')
export class studentController {
  constructor(
    @Inject(classService) private readonly studentService: classService,
  ) {}

  @Get()
  async getList(): Promise<Result> {
    const res = await this.studentService.getClassesList();
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Get(':class_id')
  async getClass(@Param('class_id') id): Promise<Result> {
    const res = await this.studentService.getClass(id);

    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Post()
  async saveClass(@Body() P: classEntity): Promise<Result> {
    const createClass = await this.studentService.saveClass(P);

    return {
      code: 200,
      message: 'success',
      data: createClass,
    };
  }

  @Put(':class_id')
  async updateClass(
    @Param('class_id') id: number,
    @Body() P: classEntity,
  ): Promise<Result> {
    const res = await this.studentService.updateClass(id, P);
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }

  @Delete(':class_id')
  async destroy(@Param('class_id') id): Promise<Result> {
    const res = await this.studentService.destroyClass(id);
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }
}
