import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "../posts/posts.entity";
import {Theme} from "./themes.entity";

@Module({
  imports:[ConfigModule.forRoot(),TypeOrmModule.forFeature([Theme])],
  controllers: [ThemesController],
  providers: [ThemesService]
})
export class ThemesModule {


}
