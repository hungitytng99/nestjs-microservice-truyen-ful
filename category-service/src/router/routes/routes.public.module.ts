import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/modules/category/category.module';
import { CategoryPublicController } from 'src/modules/category/controllers/category.public.controller';

@Module({
    controllers: [CategoryPublicController],
    providers: [],
    exports: [],
    imports: [CategoryModule],
})
export class RoutesPublicModule {}
