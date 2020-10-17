import { Module } from '@nestjs/common';
import { AppModule} from './modules/app/app.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {studentModule} from './modules/student/student.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseProviders } from './config/database'
import { ErrorsInterceptor } from './common/errors.interceptor';

@Module({
  imports: [
    AppModule,
    studentModule,
    TypeOrmModule.forRoot(databaseProviders)
  ],
  providers:[
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor
    },
  ]

})
export class ApplicationModule {}
