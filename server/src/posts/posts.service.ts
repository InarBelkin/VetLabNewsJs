import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {PostEntity} from "./posts.entity";
import {FindManyOptions, Repository} from "typeorm"
import {PostsDto} from "./posts.dto";
import {PostModel} from "../models/post.model";
import {Tag} from "../tags/tags.entity";


@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) {
    }

    async getAllPosts() {
        const posts = await this.postRepository.find({where: {deleted: false}, relations: ["tags"]});
        const newPosts = posts.map(post => {
            //post.themes = [new Theme()];
            // post.content = post.content.slice(0, 50) + '...';
            post.content = "";
            return post;
        });

        return newPosts;
    }

    async getFilterPosts(tagId: string | undefined, limit: number, page: number) {
        if (tagId) {    //Задача неразрешима, лучшие умы комнаты бьются над ответом(говолой)
            //а вообще в целом работает, только не загружает все теги
            //если захочешь сделать теги костылём(загружая теги в каждый пост по отдельности)
            //то замени leftJoinAndSelect() на leftJoin()

            // const [posts, totalCount] = await this.postRepository.createQueryBuilder('post_entity')
            //     .leftJoinAndSelect('post_entity.tags', 'tag')
            //     .where('tag.id= :id', {id: tagId})
            //     .skip((page - 1) * limit)
            //     .take(limit)
            //     //.leftJoinAndSelect('post_entity.tags', 'tag')
            //     //.loadAllRelationIds()
            //     .getManyAndCount()


            // const posts2 = this.postRepository.createQueryBuilder('post_entity')
            //     .innerJoin('post_entity.tags','tag', 'tag.id IN (:...tIds)',{tIds:tagIds})   //а вот так можно сделать фильтр на несколько сущностей, по идее
            //     .skip((page - 1) * limit)
            //     .take(limit)
            //     .getMany();

            const [posts, totalCount] = await this.postRepository      //вроде работает, но я не понимаю, как
                .createQueryBuilder('post_entity')
                .innerJoin(qb2 => {
                    return qb2
                        .select('post_entity.id', 'id')
                        .from(PostEntity, 'post_entity')
                        .innerJoin('post_entity.tags', 'tag')
                        .where('tag.id IN (:tId)', {tId: tagId})
                }, 'postWithCertainTags', 'post_entity.id = "postWithCertainTags".id')
                .leftJoinAndSelect('post_entity.tags', 'tag')
                .where("post_entity.deleted=false") //проверяй
                .orderBy("post_entity.date", "DESC")
                .skip((page - 1) * limit)
                .take(limit)
                .getManyAndCount();

            const pageCount = Math.ceil(totalCount / limit)
            return {
                data: posts,
                pageCount: pageCount,
            }
        } else {
            const searchOptions: FindManyOptions<PostEntity> = {
                where:{deleted:false},
                relations: ["tags"],
                skip: (page - 1) * limit,
                take: limit,
                order: {
                    date: "DESC"
                }
            }
            const [posts, totalCount] = await this.postRepository.findAndCount(searchOptions);
            const pageCount = Math.ceil(totalCount / limit)
            return {
                data: posts,
                pageCount: pageCount,
            }
        }

    }

    async getPost(id: string) {
        return (await this.postRepository.find({where: {id: id}, relations: ["tags"]}))[0];
    }

    async createPost(data: Partial<PostEntity>) {
        data.date = new Date();

        const createdPost = await this.postRepository.save(data);
        return {inserted: createdPost};
    }

    async updatePost(id: string, data: Partial<PostsDto>) {
        const ret = await this.postRepository.update({id: id}, {
            title: data.title,
            contentPreview: data.contentPreview,
            content: data.content,
        })
        const postb = (await this.postRepository.find({where: {id: id}}))[0] as PostEntity;
        postb.tags = data.tags;
        const ret2 = await this.postRepository.save(postb);
        return ret2;
    }

    async markToDelete(id: string) {
        return await this.postRepository.update({id: id}, {deleted: true});
    }

    async cancelDelete(id: string) {
        return await this.postRepository.update({id: id}, {deleted: false});
    }

}
