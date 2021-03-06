import { HttpModule, Module } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { StudentModule } from './modules/student/student.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorsInterceptor } from './common/errors.interceptor';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

import { TypeOrmConfigService } from './config/TypeOrmConfigService';

@Module({
  imports: [
    AppModule,
    UsersModule,

    StudentModule,
    HttpModule,

    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      // 會利用ConfigService，所以要import
      imports: [ConfigModule],
      inject: [
        // 宣告哪個provider或是service需要被注入
        ConfigService,
      ],
      // 指定用TypeOrmConfigService，作為載入TypeOrmOptions
      // Options就是資料庫連線資訊等
      useClass: TypeOrmConfigService,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class ApplicationModule {}
