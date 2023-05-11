import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import { ListTypesDoc, ListTypesEntity } from 'src/modules/list-types/repository/entities/list-types.entity';

@Injectable()
export class ListTypesRepository extends DatabaseMongoUUIDRepositoryAbstract<
    ListTypesEntity,
    ListTypesDoc
> {
    constructor(
        @DatabaseModel(ListTypesEntity.name)
        private readonly listTypesModel: Model<ListTypesEntity>
    ) {
        super(listTypesModel);
    }
}
