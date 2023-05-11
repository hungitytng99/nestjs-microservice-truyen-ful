import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { CategoryDoc, CategoryEntity } from 'src/modules/category/repository/entities/category.entity';

@Injectable()
export class CategoryRepository extends DatabaseMongoUUIDRepositoryAbstract<
    CategoryEntity,
    CategoryDoc
> {
    constructor(
        @DatabaseModel(CategoryEntity.name)
        private readonly categoryModel: Model<CategoryEntity>
    ) {
        super(categoryModel);
    }
}
