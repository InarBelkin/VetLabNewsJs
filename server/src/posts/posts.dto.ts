import {IsNotEmpty} from 'class-validator';

export class PostsDto {
    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    themeId: string[];

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
}