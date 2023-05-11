import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

export const CategoryDatabaseName = 'category';

@DatabaseEntity({ collection: CategoryDatabaseName })
export class CategoryEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: true,
        sparse: true,
        index: true,
        trim: true,
        type: String,
        unique: true,
    })
    title?: string;

    @Prop({
        required: false,
        trim: true,
        type: String,
    })
    description: string;

    @Prop({
        required: true,
        lowercase: true,
        trim: true,
        type: String,
    })
    slug: string;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryEntity);

export type CategoryDoc = CategoryEntity & Document;

