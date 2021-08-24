import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./users.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "./dto/CreateUserDto";
import {Role} from "../roles/roles.entity";
import {RolesService} from "../roles/roles.service";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
               private  roleService:RolesService) {
    }

    async getAll(){
        return await this.userRepository.find({relations:['roles']});
    }

    async  getByEmail(email:string){
        const user = await this.userRepository.findOne({where:{email:email}, relations:['roles']});
        return user;

    }

    async  createUser(dto:CreateUserDto){
        const user = await this.userRepository.save(dto);

        const role = await this.roleService.getRoleByName(process.env.ROLE_USER);
        user.roles=role;

        const userWithRole = await this.userRepository.save(user);

        return userWithRole;
    }

}
