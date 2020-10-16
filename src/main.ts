import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
/*import cookieParser from 'cookie-parser'
import compression from 'compression'*/

async function bootstrap() {

  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
 /* app.use(cookieParser());

  //  是否开启跨域配置
  app.enableCors();*/

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
