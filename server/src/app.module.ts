import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import { PostsModule } from './posts/posts.module';
import {PostEntity} from "./posts/posts.entity";
import { ThemesModule } from './themes/themes.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities:[PostEntity],
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject:[ConfigService],
        }),
        PostsModule,
        ThemesModule,
        UsersModule,
        RolesModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],

})
export class AppModule {
}
