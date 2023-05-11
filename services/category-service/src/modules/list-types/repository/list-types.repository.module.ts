import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import { ListTypesRepository } from './repositories/list-types.repository';
import { ListTypesEntity, ListTypesSchema } from './entities/list-types.entity';

@Module({
    providers: [ListTypesRepository],
    exports: [ListTypesRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: ListTypesEntity.name,
                    schema: ListTypesSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class ListTypesRepositoryModule {}
