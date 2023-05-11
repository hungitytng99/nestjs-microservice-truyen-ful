import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEmpty,
    IsEnum,
    IsNotEmpty,
    IsString,
    MinLength
} from 'class-validator';
import { ENUM_LIST_TYPES_CODE } from '../constants/list-types.type.constant';

export class ListTypesCreateDto {
    @ApiProperty({
        example: faker.lorem.sentence,
        required: true,
    })
    @IsNotEmpty()
    @Type(() => String)
    readonly title: string;

    @ApiProperty({
        example: faker.lorem.paragraph,
        required: false,
    })
    @IsString()
    @IsEmpty()
    @MinLength(1)
    @Type(() => String)
    readonly description: string;

    @IsString()
    @IsEmpty()
    @MinLength(1)
    @Type(() => String)
    @IsEnum(ENUM_LIST_TYPES_CODE)
    readonly code: string;
}
