import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/modules/category/services/category.service';
import { CategoryDoc } from 'src/modules/category/repository/entities/category.entity';
// import { AuthService } from 'src/common/auth/services/auth.service';
// import { UserService } from 'src/modules/user/services/user.service';
// import { UserDoc } from 'src/modules/user/repository/entities/user.entity';
// import { RoleDoc } from 'src/modules/role/repository/entities/role.entity';
// import { RoleService } from 'src/modules/role/services/role.service';
// import { ENUM_USER_SIGN_UP_FROM } from 'src/modules/user/constants/user.enum.constant';

@Injectable()
export class MigrationCategorySeed {
    constructor(
        private readonly categoryService: CategoryService,
    ) { }

    @Command({
        command: 'seed:categories',
        describe: 'seed categores',
    })
    async seeds(): Promise<void> {
        const category1: Promise<CategoryDoc> = this.categoryService.create(
            {
                title: 'Kiếm Hiệp',
                description: 'Truyện thường xoay quanh cuộc đời của nhân vật chính, quá trình rèn luyện, trưởng thành, tìm kiếm, học tập các bí kíp võ công, cùng những cuộc phiêu lưu, truy đuổi, chém giết... đầy nguy hiểm và cơ hội trong giới võ lâm giang hồ.',
            },
        );
        const category2: Promise<CategoryDoc> = this.categoryService.create(
            {
                title: 'Ngôn Tình',
                description: 'Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính.',
            },
        );
        const category3: Promise<CategoryDoc> = this.categoryService.create(
            {
                title: 'Hệ Thống',
                description: 'Truyện hệ thống là truyện thường có nhân vật chính mang trong người một hệ thống. Hệ thống này thường cộng sinh với nhân vật chính, nhờ hoàn thành nhiệm vụ/yêu cầu thông qua nó, nhân vật chính có thể đạt được nhiều lợi ích.',
            },
        );
        const category4: Promise<CategoryDoc> = this.categoryService.create(
            {
                title: 'Dị Giới',
                description: 'Trong truyện có xuất hiện những thế giới kỳ dị, khác với thế giới chúng ta đang sinh sống.',
            },
        );
        const category5: Promise<CategoryDoc> = this.categoryService.create(
            {
                title: 'Quân Sự',
                description: 'Truyện có yếu tố quân sự, thường diễn ra trong môi trường quân đội, quân lính.',
            },
        );

        try {
            await Promise.all([category1, category2, category3, category4, category5]);
        } catch (err: any) {
            throw new Error(err.message);
        }

        return;
    }

    @Command({
        command: 'rollback:categories',
        describe: 'remove categories',
    })
    async remove(): Promise<void> {
        try {
            await this.categoryService.deleteMany({});
        } catch (err: any) {
            throw new Error(err.message);
        }

        return;
    }
}
