import {Module} from '@nestjs/common';
import {RolesService} from './roles.service';
import {RolesController} from './roles.controller';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "../posts/posts.entity";
import {Role} from "./roles.entity";

@Module({
    imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Role]),
        RolesModule],
    providers: [RolesService],
    controllers: [RolesController],
    exports: [RolesService]
})
export class RolesModule {
}
