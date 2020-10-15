import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getName(id :string):string {

    return "吉亚坤"+id
  }
}
