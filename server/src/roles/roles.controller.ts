import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {Role} from "./roles.model";
import {RoleDto} from "./role.dto";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {
    }

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
