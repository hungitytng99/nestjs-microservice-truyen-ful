import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEmpty,
    IsNotEmpty,
    IsString,
    MinLength
} from 'class-validator';

export class CategoryCreateDto {
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
}
