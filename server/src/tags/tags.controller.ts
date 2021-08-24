import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {TagsService} from "./tags.service";
import {TagDto} from "./dto/tag.dto";
import {Tag} from "./tags.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@Controller('tags')
export class TagsController {
    constructor(private tagService: TagsService) {
    }

    @Get()
    getAll(){
        return this.tagService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') id:string){
        return this.tagService.getOne(id);
    }

    @Roles(process.env.ROLE_ADMIN)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() data:TagDto){
        return this.tagService.create(data);
    }

    @Roles(process.env.ROLE_ADMIN)
    @UseGuards(RolesGuard)
    @Patch('/:id')
    update(@Param('id') id:string, @Body() data:Partial<Tag>){
        return this.tagService.update(id,data);
    }

    @Roles(process.env.ROLE_ADMIN)
    @UseGuards(RolesGuard)
    @Delete('/:id')
    delete(@Param('id') id:string)
    {
        return this.tagService.delete(id);
    }
}
