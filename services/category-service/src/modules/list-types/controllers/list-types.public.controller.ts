import {
    Controller,
    Get,
} from '@nestjs/common';
import { Response } from 'src/common/response/decorators/response.decorator';
import { IResponse } from 'src/common/response/interfaces/response.interface';
import { ListTypesService } from '../services/list-types.service';

@Controller({
    version: '1',
    path: '/list-types',
})
export class ListTypesPublicController {
    constructor(
        private readonly listTypesService: ListTypesService,
    ) { }

    @Response('list-types.getAll')
    @Get()
    async getAll(): Promise<IResponse> {
        const listTypes = await this.listTypesService.findAll();
        return {
            data: listTypes,
        };
    }
}
