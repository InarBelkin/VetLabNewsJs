import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "./posts.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports:[ConfigModule.forRoot(),TypeOrmModule.forFeature([PostEntity]),AuthModule],
  controllers: [PostsController],
  providers: [PostsService]

})
export class PostsModule {}
