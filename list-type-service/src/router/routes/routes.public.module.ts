import { Module } from '@nestjs/common';
import { ListTypesModule } from 'src/modules/list-types/list-types.module';
import { ListTypesPublicController } from 'src/modules/list-types/controllers/list-types.public.controller';

@Module({
    controllers: [ListTypesPublicController],
    providers: [],
    exports: [],
    imports: [ListTypesModule],
})
export class RoutesPublicModule {}
