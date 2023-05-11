import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    IDatabaseCreateOptions,
    IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseManyOptions, IDatabaseSaveOptions
} from 'src/common/database/interfaces/database.interface';
import { ICategoryService } from 'src/modules/category/interfaces/category.service.interface';
import { CategoryDoc, CategoryEntity } from 'src/modules/category/repository/entities/category.entity';
import { CategoryRepository } from 'src/modules/category/repository/repositories/cateogry.repository';
import { CategoryCreateDto } from '../dtos/category.create.dto';
import slug from 'slug';


@Injectable()
export class CategoryService implements ICategoryService {
    constructor(
        private readonly configService: ConfigService,
        private readonly categoryRepository: CategoryRepository,
    ) {
    }

    async findOneById<CategoryDoc>(_id: string, options?: IDatabaseFindOneOptions<any>): Promise<CategoryDoc> {
        return this.categoryRepository.findOneById<CategoryDoc>(_id, options);
    }

    async findOneByTitle<CategoryDoc>(
        name: string,
        options?: IDatabaseFindOneOptions
    ): Promise<CategoryDoc> {
        return this.categoryRepository.findOne<CategoryDoc>({ name }, options);
    }

    async findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.categoryRepository.findOne<T>(find, options);
    }

    async create({ title, description }: CategoryCreateDto, options?: IDatabaseCreateOptions<any>): Promise<CategoryDoc> {
        const create: CategoryEntity = new CategoryEntity();
        create.title = title;
        create.description = description;
        create.slug = slug(title);

        return this.categoryRepository.create<CategoryEntity>(create, options);

    }
    async delete(
        repository: CategoryDoc,
        options?: IDatabaseSaveOptions
    ): Promise<CategoryDoc> {
        return this.categoryRepository.softDelete(repository, options);
    }


    async deleteMany(
        find: Record<string, any>,
        options?: IDatabaseManyOptions
    ): Promise<boolean> {
        return this.categoryRepository.deleteMany(find, options);
    }

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<CategoryDoc[]> {
        return this.categoryRepository.findAll<CategoryDoc>(find, {
            ...options,
            join: true,
        });
    }
}
