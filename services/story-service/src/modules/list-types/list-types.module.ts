import { Module } from '@nestjs/common';
import { ListTypesRepositoryModule } from './repository/list-types.repository.module';
import { ListTypesService } from './services/list-types.service';

@Module({
    imports: [ListTypesRepositoryModule],
    exports: [ListTypesService],
    providers: [ListTypesService],
    controllers: [],
})
export class ListTypesModule { }
