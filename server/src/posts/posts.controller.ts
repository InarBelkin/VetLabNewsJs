import {Body, Controller, Get, Param, Patch, Post, Put, Query, UseGuards} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {PostsDto} from "./posts.dto";
import * as Path from "path";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PostEntity} from "./posts.entity";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @ApiOperation({summary: 'Получить все посты'})
    @Get('/getall')
    getAll() {
        return this.postService.getAllPosts();
    }

    @ApiOperation({summary: 'Получить посты по фильтру'})
    @ApiResponse({status: 200, type: [PostEntity]})
    @Get()
    getByFilter(@Query() pagination:{page:number,limit:number,tagId?:string}){
        return this.postService.getFilterPosts(pagination.tagId,pagination.limit,pagination.page);
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.postService.getPost(id);
    }

    // @Get()
    // getOneByQuery(@Query() query:{id:string} ){
    //     if(query.id){
    //         return this.postService.getPost(query.id);
    //     }
    //     else return this.postService.getAllPosts();
    // }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() data: PostsDto) {
        return this.postService.createPost(data);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Patch('/:id')
    update(@Param('id') id: string, @Body() data: Partial<PostsDto>) {
        return this.postService.updatePost(id, data);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Patch('marktodel/:id')
    delete(@Param('id') id: string) {
        return this.postService.markToDelete(id);
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Patch('canceldel/:id')
    cancelDelete(@Param('id') id: string) {
        return this.postService.cancelDelete(id);
    }
}
