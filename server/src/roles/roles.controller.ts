import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {Role} from "./roles.entity";
import {RoleDto} from "./role.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {
    }

    @Roles(`ADMIN`)
    @UseGuards(RolesGuard)
    @Post()
    async create(@Body() dto: RoleDto) {
        return this.roleService.createRole(dto);

    }

    @Get()
    async getAll(){
        return await this.roleService.getAll();

    }

    @Get('/byName/:name')
    async getByName(@Param('name') name: string) {
        return await this.roleService.getRoleByName(name);
    }
}
