import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {PostsService} from "../posts/posts.service";
import {ThemesService} from "./themes.service";
import {PostsDto} from "../posts/posts.dto";
import {ThemesDto} from "./themes.dto";
import {Theme} from "./themes.entity";

@Controller('themes')
export class ThemesController {

    constructor(private themeService:ThemesService) {
    }

    @Get()
    getAll(){
        return this.themeService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') id:string){
        return this.themeService.getOne(id);
    }

    @Post()
    create(@Body() data:ThemesDto){
        return this.themeService.create(data);
    }

    @Patch('/:id')
    update(@Param('id') id:string, @Body() data:Partial<Theme>){
        return this.themeService.update(id,data);
    }

    @Delete('/:id')
    delete(@Param('id') id:string)
    {
        return this.themeService.delete(id);
    }
}

