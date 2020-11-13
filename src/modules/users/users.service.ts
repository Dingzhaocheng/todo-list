import { HttpException, Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '../student/student.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async findOne(id): Promise<UsersEntity | undefined> {
    return this.findOneById(id);
  }

  async registUser(obj): Promise<UsersEntity | undefined> {
    return this.findOneById(1);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<UsersEntity> {
    const info = await this.usersRepository.findOne(id);
    if (!info) {
      throw new HttpException(`指定 id=${id} 不存在`, 404);
    }
    return info;
  }
}
