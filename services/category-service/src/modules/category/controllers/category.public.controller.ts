import {
    Controller,
    Get,
} from '@nestjs/common';
import { Response } from 'src/common/response/decorators/response.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { CategoryService } from '../services/category.service';

@Controller({
    version: '1',
    path: '/category',
})
export class CategoryPublicController {
    constructor(
        private readonly categoryService: CategoryService,
    ) { }

    @Response('category.getAll')
    @Get()
    async getAll(): Promise<IResponse> {
        const category = await this.categoryService.findAll();
        return {
            data: category,
        };
    }
}
