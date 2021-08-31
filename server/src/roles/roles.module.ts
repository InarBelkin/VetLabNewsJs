import {forwardRef, Module} from '@nestjs/common';
import {RolesService} from './roles.service';
import {RolesController} from './roles.controller';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "../posts/posts.entity";
import {Role} from "./roles.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([Role]),
        forwardRef(() => AuthModule)],
    providers: [RolesService],
    controllers: [RolesController],
    exports: [RolesService]
})
export class RolesModule {
}
