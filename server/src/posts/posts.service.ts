import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./posts.entity";
import {Repository} from "typeorm"
import {PostsDto} from "./posts.dto";
import {PostModel} from "../models/post.model";
import {Theme} from "../themes/themes.entity";


@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) {
    }

    async getAllPosts() {
        const posts = await this.postRepository.find({where: {deleted: false}, relations:["themes"]});
        const newPosts = posts.map(post => {
            //post.themes = [new Theme()];
            post.content = post.content.slice(0, 50) + '...';
            return post;
        });



        return newPosts;
    }

    async getPost(id: string) {
        return await this.postRepository.find({where: {id: id}});
    }

    async createPost(data: PostModel) {
        this.postRepository.save(data);
        return {inserted: data};
    }

    async updatePost(id: string, data: Partial<PostsDto>) {

        return await this.postRepository.update({id: id}, {
            content: data.content
        });
    }

    async markToDelete(id: string) {
        return await this.postRepository.update({id: id}, {deleted: true});
    }

}
