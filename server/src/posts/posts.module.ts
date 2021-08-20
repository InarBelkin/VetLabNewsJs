import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostEntity} from "./posts.entity";

@Module({
  imports:[ConfigModule.forRoot(),TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostsController],
  providers: [PostsService]

})
export class PostsModule {}
