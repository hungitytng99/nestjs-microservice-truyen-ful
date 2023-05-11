import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { ListTypesService } from 'src/modules/list-types/services/list-types.service';
import { ListTypesDoc } from 'src/modules/list-types/repository/entities/list-types.entity';
import { ENUM_LIST_TYPES_CODE } from 'src/modules/list-types/constants/list-types.type.constant';

@Injectable()
export class MigrationListTypesSeed {
    constructor(
        private readonly listTypesService: ListTypesService,
    ) { }

    @Command({
        command: 'seed:listTypes',
        describe: 'Seed list types',
    })
    async seeds(): Promise<void> {
        const listTypes1: Promise<ListTypesDoc> = this.listTypesService.create(
            {
                title: 'Truyện mới cập nhật',
                description: 'Danh sách truyện chữ được cập nhật (vừa ra mắt, thêm chương mới, sửa nội dung,..) gần đây.',
                code: ENUM_LIST_TYPES_CODE.New,
            },
        );
        const listTypes2: Promise<ListTypesDoc> = this.listTypesService.create(
            {
                title: 'Truyện Hot',
                description: 'Danh sách những truyện đang hot, có nhiều người đọc và quan tâm nhất trong tháng này.',
                code: ENUM_LIST_TYPES_CODE.Hot,
            },
        );
        const listTypes4: Promise<ListTypesDoc> = this.listTypesService.create(
            {
                title: 'Truyện Full',
                description: 'Danh sách những truyện đã hoàn thành, ra đủ chương.',
                code: ENUM_LIST_TYPES_CODE.Full,
            },
        );
        const listTypes5: Promise<ListTypesDoc> = this.listTypesService.create(
            {
                title: 'Tiên Hiệp Hay',
                description: 'Danh sách truyện tiên hiệp hay, chọn lọc được cập nhật liên tục. Truyện tiên hiệp thường kể về quá trình tu luyện và khám phá thế giới tu sĩ thần tiên đầy bí ẩn của nhân vật chính.',
                code: ENUM_LIST_TYPES_CODE.HotFairy,
            },
        );
        const listTypes3: Promise<ListTypesDoc> = this.listTypesService.create(
            {
                title: 'Kiếm Hiệp Hay',
                description: 'Danh sách truyện kiếm hiệp hay, chọn lọc được cập nhật liên tục. Truyện kiếm hiệp thường kể về quá trình hành tẩu giang hồ của nhân vật chính. Truyện thường có nội dung xoay quanh những đấu đá của các môn phái trong võ lâm, có liên quan đến các bí kíp võ công, ân oán của giang hồ.',
                code: ENUM_LIST_TYPES_CODE.HotSwordPlay,
            },
        );

        try {
            await Promise.all([listTypes1, listTypes2, listTypes3, listTypes4, listTypes5]);
        } catch (err: any) {
            throw new Error(err.message);
        }

        return;
    }

    @Command({
        command: 'rollback:listTypes',
        describe: 'Remove list types',
    })
    async remove(): Promise<void> {
        try {
            await this.listTypesService.deleteMany({});
        } catch (err: any) {
            throw new Error(err.message);
        }
        return;
    }
}
