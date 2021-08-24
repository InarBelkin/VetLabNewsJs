import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Tag} from "./tags.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports:[ConfigModule.forRoot(),TypeOrmModule.forFeature([Tag]),AuthModule],
  providers: [TagsService],
  controllers: [TagsController]
})
export class TagsModule {}
