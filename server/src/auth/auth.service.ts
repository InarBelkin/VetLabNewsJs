import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/CreateUserDto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {tsconfigPathsBeforeHookFactory} from "@nestjs/cli/lib/compiler/hooks/tsconfig-paths.hook";
import {User} from "../users/users.entity";
@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto) {
        const  user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getByEmail(userDto.email);
        if(candidate){
            throw new HttpException('email уже используется', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);

        const user = await this.userService.createUser({...userDto, password:hashPassword});
        const token = await this.generateToken(user);
        const untoken = this.jwtService.decode(token.token);
        return token;


    }
    async generateToken(user:User){
        const payload = {email:user.email,id:user.id,roles: user.roles}
        const token = this.jwtService.sign(payload);
       // const userin = this.jwtService.verify(token);
        return{
            token: token
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if(user && passwordEquals){
            return user;
        }
        throw  new UnauthorizedException({message:'Некорректный mail или пароль'});
    }

    public async checkUser(token:string|undefined){
        try {
                const bearer = token.split(' ')[0];

                const innerToken = token.split(' ')[1];
                const user = this.jwtService.verify(innerToken);
                return this.generateToken(user);

        }
        catch (e){
            console.log(e);
            throw new UnauthorizedException({message: 'Пользователь не авторизован'});
        }









    }
}
