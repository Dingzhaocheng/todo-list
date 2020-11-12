import { Body, Controller, Get, Inject, Param, Query } from '@nestjs/common';

import { Result } from '../../common/result.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  @Get()
  async getList(@Query('username') username: string): Promise<Result> {
    console.log(username);
    const res = await this.usersService.findOne(username);
    return {
      code: 200,
      message: 'success',
      data: res,
    };
  }
}
