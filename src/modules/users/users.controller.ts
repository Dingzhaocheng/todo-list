import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { Result } from '../../common/result.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {}

  @Get(':id')
  async getUser(@Param('id') id): Promise<Result> {
    const res = await this.usersService.findOne(id);

    return {
      code: 200,
      message: 'success',
      data: res || null,
    };
  }

  @Post()
  async registUser(@Body() requestBody: any): Promise<Result> {
    const { accountName, realName, password, repassword, mobile } = requestBody;

    if (password !== repassword) {
      return {
        code: 400,
        message: '两次密码输入不一致',
      };
    }
    /*
    const user = await this.usersService.findOne()*/

    const res = await this.usersService.registUser({
      accountName,
      realName,
      password,
      repassword,
      mobile,
    });

    return {
      code: 200,
      message: 'success',
      data: res || null,
    };
  }
}
