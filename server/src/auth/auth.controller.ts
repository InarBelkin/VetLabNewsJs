import {Body, Controller, Post, Headers} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/CreateUserDto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto);
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto);
    }

    @Post('/check')
    check(@Headers("authorization") token: string|undefined){
        return this.authService.checkUser(token);
    }



}
