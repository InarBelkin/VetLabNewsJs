import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "../posts/posts.entity";
import {Repository} from "typeorm";
import {Role} from "./roles.model";
import {RoleDto} from "./role.dto";

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {
    }

    async createRole(dto: RoleDto) {
        const role = await this.roleRepository.save(dto);
        return role;
    }

    async getAll() {
        const roles = await this.roleRepository.find();
        return roles;
    }

    async getRoleByName(name: string) {
        const role = await this.roleRepository.find({where: {name: name}});
        return role;

    }

}
