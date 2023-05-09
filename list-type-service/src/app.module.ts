import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'HERO_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'hero', // ['hero', 'hero2']
        protoPath: join(__dirname, './hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
        url: `${process.env.CATEGORY_SERVICE_NAME ?? 'localhost'}:8887`
      },
    },
  ]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
