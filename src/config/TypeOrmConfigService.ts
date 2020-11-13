import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { StudentEntity } from '../modules/student/student.entity';
import path = require('path');
import { doc } from 'prettier';

console.log(path.resolve(__dirname, '..', 'models/*.ts'));
@Injectable()
// 需要實作TypeOrmOptionsFactory
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  // 注入config service取得env變數
  constructor(private readonly configService: ConfigService) {}
  // 就是回傳TypeOrmOptions物件
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql', //configService.get('DB_TYPE') as DatabaseType,
      host: this.configService.get('DATABASE__HOST'),
      port: Number(this.configService.get('DATABASE__PORT')),
      username: this.configService.get('DATABASE__USER'),
      password: this.configService.get('DATABASE__PWD'),
      database: this.configService.get('DATABASE__SCHEMA'),
      synchronize: true,
      entities: [path.join(__dirname, '/../**/**.entity{.ts,.js}')],
      logging: true,
    };
  }
}
