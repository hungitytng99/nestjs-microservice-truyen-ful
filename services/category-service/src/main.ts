import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app/app.module';
import swaggerInit from './swagger';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const databaseUri: string = configService.get<string>('database.host');
  app.setGlobalPrefix('/api/v1');
  app.enableCors();

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'hero', // ['hero', 'hero2']
  //     protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
  //     url: `${process.env.CATEGORY_SERVICE_NAME ?? 'localhost'}:8887`
  //   },
  // });
  // await app.startAllMicroservices();

  // Swagger
  await swaggerInit(app);

  await app.listen(8888);
  const logger = new Logger();
  logger.log(`==========================================================`);
  logger.log(
    `Http Server running on ${await app.getUrl()}`,
    'NestApplication'
  );
  logger.log(`Database host ${databaseUri}`, 'NestApplication');

  logger.log(`==========================================================`);

}
bootstrap();
