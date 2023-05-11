import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CommonModule } from 'src/common/common.module';
import { MigrationListTypesSeed } from './seeds/migration.list-types.seed';
import { ListTypesModule } from 'src/modules/list-types/list-types.module';
@Module({
    imports: [
        CommonModule,
        CommandModule,
        ListTypesModule,
    ],
    providers: [
        MigrationListTypesSeed
    ],
    exports: [],
})
export class MigrationModule { }
