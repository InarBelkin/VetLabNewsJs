import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "../posts/posts.entity";
import {User} from "./users.entity";
import {Role} from "../roles/roles.entity";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([User]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {
}
