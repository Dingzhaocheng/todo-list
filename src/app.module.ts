import { Module } from '@nestjs/common';
import { AppModule} from './modules/app/app.module';
import {studentModule} from './modules/student/student.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseProviders } from './config/database'

@Module({
  imports: [
    AppModule,
    studentModule,
    TypeOrmModule.forRoot(databaseProviders)
  ],

})
export class ApplicationModule {}
