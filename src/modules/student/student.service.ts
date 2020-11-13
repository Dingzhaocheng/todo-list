import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async getStudentsList(): Promise<StudentEntity[]> {
    return await this.studentRepository.find();
  }

  async getStudent(id: number): Promise<StudentEntity> {
    return await this.findOneById(id);
  }

  async saveStudent(p: StudentEntity): Promise<StudentEntity> {
    try {
      return await this.studentRepository.save(p);
    } catch (e) {
      return e;
    }
  }

  async updateStudent(id: number, P: StudentEntity): Promise<any> {
    try {
      await this.findOneById(id);
      delete P.id;
      return await this.studentRepository.update(id, P);
    } catch (e) {
      return e;
    }
  }

  async destroyStudent(id: number): Promise<any> {
    return await this.studentRepository.delete(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<StudentEntity> {
    const info = await this.studentRepository.findOne(id);
    if (!info) {
      throw new HttpException(`指定 id=${id} 不存在`, 404);
    }
    return info;
  }
}
