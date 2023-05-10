import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CommonModule } from 'src/common/common.module';
import { MigrationCategorySeed } from './seeds/migration.category.seed';
import { CategoryModule } from 'src/modules/category/category.module';
@Module({
    imports: [
        CommonModule,
        CommandModule,
        CategoryModule,
    ],
    providers: [
        MigrationCategorySeed
    ],
    exports: [],
})
export class MigrationModule { }
