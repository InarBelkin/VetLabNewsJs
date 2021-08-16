import {Body, Controller, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {PostsDto} from "./posts.dto";
import * as Path from "path";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @Get()
    getAll() {
        return this.postService.getAllPosts();
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

    @Post()
    create(@Body() data: PostsDto) {
        return this.postService.createPost(data);
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() data: Partial<PostsDto>) {
        return this.postService.updatePost(id, data);
    }

    @Patch('delete/:id')
    delete(@Param('id') id: string) {
        return this.postService.markToDelete(id);
    }
}
