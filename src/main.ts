import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
// @ts-ignore
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
/*import cookieParser from 'cookie-parser'
import compression from 'compression'*/

async function bootstrap() {
  const APP = await NestFactory.create(
    ApplicationModule,

    /*{
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['172.16.0.71:9092'],
        },
        consumer: {
          groupId: 'my-kafka-consumer',
        },
      },
    },*/
  );
  const CONFIG_SERVICE = APP.get(ConfigService);
  const PORT = CONFIG_SERVICE.get('PORT');
  /* const OPTIONS = new DocumentBuilder()
    .setTitle('学生接口')
    .setDescription('学生接口')
    .setVersion('1.0')
    .addTag('student')
    .build();

  const document = SwaggerModule.createDocument(APP, OPTIONS);

  SwaggerModule.setup('docs', APP, document);
  APP.enableCors();*/

  await APP.listen(PORT);

  /* app.use(cookieParser());

  //  是否开启跨域配置
  */

  /* //  静态资源配置
  app.useStaticAssets(join(__dirname, 'uploads'), {
    prefix: '/static'
  })

  //  全局异常处理
  app.useGlobalFilters(new ErrorFilter())

  //  处理全局数据返回
  app.useGlobalInterceptors(new StandardRespInterceptor())*/

  //  开启Gzip压缩请求
  /*app.use(compression())*/
}
bootstrap();
