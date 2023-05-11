import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseManyOptions, IDatabaseSaveOptions } from "src/common/database/interfaces/database.interface";
import { ListTypesDoc } from "src/modules/list-types/repository/entities/list-types.entity";
import { ListTypesCreateDto } from "../dtos/list-types.create.dto";

export interface IListTypesService {
    findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<ListTypesDoc[]>;

    findOne<T>(
        find: Record<string, any>,
        options?: IDatabaseFindOneOptions
    ): Promise<T>;

    findOneById<T>(_id: string, options?: IDatabaseFindOneOptions): Promise<T>;

    findOneByTitle<T>(
        title: string,
        options?: IDatabaseFindOneOptions
    ): Promise<T>;

    create(
        { title, description }: ListTypesCreateDto,
        options?: IDatabaseCreateOptions,
    ): Promise<ListTypesDoc>;

    delete(
        repository: ListTypesDoc,
        options?: IDatabaseSaveOptions
    ): Promise<ListTypesDoc>;

    deleteMany(
        find: Record<string, any>,
        options?: IDatabaseManyOptions
    ): Promise<boolean>;
}
