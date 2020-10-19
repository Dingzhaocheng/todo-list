import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { studentController } from './class.controller';
import { classService } from './class.service';
import { classEntity } from './class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([classEntity])],
  controllers: [studentController],
  providers: [classService],
})
export class studentModule {}
