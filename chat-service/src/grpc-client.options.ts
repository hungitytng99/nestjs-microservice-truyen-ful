import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero', 
    protoPath: join(__dirname, './hero/hero.proto'), 
    url: `${process.env.CHAT_SERVICE_NAME ?? 'localhost'}:8890`
  },
};