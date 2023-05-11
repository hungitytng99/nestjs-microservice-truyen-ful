import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { CategoryRepository } from './repositories/cateogry.repository';
import { CategoryEntity, CategorySchema } from './entities/category.entity';

@Module({
    providers: [CategoryRepository],
    exports: [CategoryRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: CategoryEntity.name,
                    schema: CategorySchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class CategoryRepositoryModule {}
