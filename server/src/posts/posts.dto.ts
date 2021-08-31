import {IsNotEmpty} from 'class-validator';
import {Tag} from "../tags/tags.entity";

export class PostsDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    contentPreview: string;

    @IsNotEmpty()
    content: string;

    tags:Tag[];

}