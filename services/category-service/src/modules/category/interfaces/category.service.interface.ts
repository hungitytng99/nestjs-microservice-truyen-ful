import { IDatabaseCreateOptions, IDatabaseFindAllOptions, IDatabaseFindOneOptions, IDatabaseManyOptions, IDatabaseSaveOptions } from "src/common/database/interfaces/database.interface";
import { CategoryDoc } from "src/modules/category/repository/entities/category.entity";
import { CategoryCreateDto } from "../dtos/category.create.dto";

export interface ICategoryService {
    findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<CategoryDoc[]>;

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
        { title, description }: CategoryCreateDto,
        options?: IDatabaseCreateOptions,
    ): Promise<CategoryDoc>;

    delete(
        repository: CategoryDoc,
        options?: IDatabaseSaveOptions
    ): Promise<CategoryDoc>;

    deleteMany(
        find: Record<string, any>,
        options?: IDatabaseManyOptions
    ): Promise<boolean>;
}
