import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/modules/category/category.module';
import { CategoryPublicController } from 'src/modules/category/controllers/category.public.controller';
import { ListTypesPublicController } from 'src/modules/list-types/controllers/list-types.public.controller';
import { ListTypesModule } from 'src/modules/list-types/list-types.module';

@Module({
    controllers: [CategoryPublicController, ListTypesPublicController],
    providers: [],
    exports: [],
    imports: [CategoryModule, ListTypesModule],
})
export class RoutesPublicModule { }
