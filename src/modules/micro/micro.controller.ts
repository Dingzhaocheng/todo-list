import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MicroService } from './micro.service';

@Controller('micro')
export class MicroController {
  constructor(
    @Inject(MicroService) private readonly microService: MicroService,
  ) {}

  @MessagePattern('my-first-topic') // Our topic name
  getHello(@Payload() message) {
    console.log(message.value);
    return 'Hello World';
  }
}
