import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
    IDatabaseCreateOptions,
    IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseManyOptions, IDatabaseSaveOptions
} from 'src/common/database/interfaces/database.interface';
import { IListTypesService } from 'src/modules/list-types/interfaces/list-types.service.interface';
import { ListTypesDoc, ListTypesEntity } from 'src/modules/list-types/repository/entities/list-types.entity';
import { ListTypesRepository } from 'src/modules/list-types/repository/repositories/list-types.repository';
import { ListTypesCreateDto } from '../dtos/list-types.create.dto';
import slug from 'slug';
import { ENUM_LIST_TYPES_CODE } from '../constants/list-types.type.constant';


@Injectable()
export class ListTypesService implements IListTypesService {
    constructor(
        private readonly configService: ConfigService,
        private readonly listTypesRepository: ListTypesRepository,
    ) {
    }

    async findOneById<ListTypesDoc>(_id: string, options?: IDatabaseFindOneOptions<any>): Promise<ListTypesDoc> {
        return this.listTypesRepository.findOneById<ListTypesDoc>(_id, options);
    }

    async findOneByTitle<ListTypesDoc>(
        name: string,
        options?: IDatabaseFindOneOptions
    ): Promise<ListTypesDoc> {
        return this.listTypesRepository.findOne<ListTypesDoc>({ name }, options);
    }

    async findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<T> {
        return this.listTypesRepository.findOne<T>(find, options);
    }

    async create({ title, description, code }: ListTypesCreateDto, options?: IDatabaseCreateOptions<any>): Promise<ListTypesDoc> {
        const create: ListTypesEntity = new ListTypesEntity();
        create.title = title;
        create.description = description;
        create.slug = slug(title);
        create.code = code;
        return this.listTypesRepository.create<ListTypesEntity>(create, options);

    }
    async delete(
        repository: ListTypesDoc,
        options?: IDatabaseSaveOptions
    ): Promise<ListTypesDoc> {
        return this.listTypesRepository.softDelete(repository, options);
    }


    async deleteMany(
        find: Record<string, any>,
        options?: IDatabaseManyOptions
    ): Promise<boolean> {
        return this.listTypesRepository.deleteMany(find, options);
    }

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<ListTypesDoc[]> {
        return this.listTypesRepository.findAll<ListTypesDoc>(find, {
            ...options,
            join: true,
        });
    }
}
