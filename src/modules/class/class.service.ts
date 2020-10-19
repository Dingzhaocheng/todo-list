import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { classEntity } from './class.entity';

@Injectable()
export class classService {
  constructor(
    @InjectRepository(classEntity)
    private readonly classRepository: Repository<classEntity>,
  ) {}

  async getClassesList(): Promise<classEntity[]> {
    return await this.classRepository.find();
  }

  async getClass(class_id: number): Promise<classEntity> {
    return await this.findOneById(class_id);
  }

  async saveClass(p: classEntity): Promise<classEntity> {
    try {
      return await this.classRepository.save(p);
    } catch (e) {
      return e;
    }
  }

  async updateClass(class_id: number, P: classEntity): Promise<any> {
    try {
      await this.findOneById(class_id);
      delete P.class_id;
      return await this.classRepository.update(class_id, P);
    } catch (e) {
      return e;
    }
  }

  async destroyClass(id: number): Promise<any> {
    return await this.classRepository.delete(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param class_id ID
   */
  private async findOneById(class_id: number): Promise<classEntity> {
    const catInfo = await this.classRepository.findOne(class_id);
    if (!catInfo) {
      throw new HttpException(`指定 id=${class_id} 不存在`, 404);
    }
    return catInfo;
  }
}
