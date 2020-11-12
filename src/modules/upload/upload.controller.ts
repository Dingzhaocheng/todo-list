import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { UploadService } from './upload.service';
import { StudentEntity } from '../student/student.entity';
import { Result } from '../../common/result.interface';

@Controller('upload')
export class UploadController {
  /*constructor( @Injectable(UploadService) private readonly uploadService:UploadService) {
  }*/
  @Post()
  async uploadFile(@Body() body): Promise<Result> {
    return {
      code: 200,
      message: 'success',
      data: null,
    };
  }
}
