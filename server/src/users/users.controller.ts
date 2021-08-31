import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {PostsDto} from "../posts/posts.dto";
import {CreateUserDto} from "./dto/CreateUserDto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    async GetAll() {
        return await this.userService.getAll();
    }


    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post()
    async registration(@Body() data: CreateUserDto) {
        return await this.userService.createUser(data);
    }

}

