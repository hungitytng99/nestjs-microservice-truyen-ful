import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import { ENUM_LIST_TYPES_CODE } from '../../constants/list-types.type.constant';

export const ListTypesDatabaseName = 'list-types';

@DatabaseEntity({ collection: ListTypesDatabaseName })
export class ListTypesEntity extends DatabaseMongoUUIDEntityAbstract {
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
    @Prop({
        required: true,
        trim: true,
        type: String,
        enum: Object.values(ENUM_LIST_TYPES_CODE),
    })
    code: string;
}

export const ListTypesSchema = SchemaFactory.createForClass(ListTypesEntity);

export type ListTypesDoc = ListTypesEntity & Document;

