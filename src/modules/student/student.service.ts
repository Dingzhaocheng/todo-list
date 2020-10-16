import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private  readonly  studentRepository:Repository<any>
  ) {}


  async getStudentsList():Promise<StudentEntity[]> {

    return await this.studentRepository.find()
  }

  async getStudent():Promise<StudentEntity[]> {

    return await this.studentRepository.findOne(1)
  }

  async saveStudent(p:StudentEntity):Promise<StudentEntity[]> {
    try {
      return await this.studentRepository.save(p)
    } catch (e) {
      return e


    }

    /*async updateStudent(id:number,P:Partial<StudentEntity>){
      try {
        await  this.studentRepository.update(id,P)
        return this.studentRepository.findOne(id)
      }catch (e) {
        return  {e}
      }
    }*/

  }

}
