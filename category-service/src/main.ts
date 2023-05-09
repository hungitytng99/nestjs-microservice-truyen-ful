import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero', // ['hero', 'hero2']
      protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
      url: `${process.env.CATEGORY_SERVICE_NAME ?? 'localhost'}:8887`
    },
  });
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['localhost:9092'],
  //     }
  //   }
  // });


  await app.startAllMicroservices();
  await app.listen(8888);
  console.log(`Start app at: ${await app.getUrl()}`);

}
bootstrap();
