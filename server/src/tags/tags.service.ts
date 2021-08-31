import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Tag} from "./tags.entity";
import {TagDto} from "./dto/tag.dto";

@Injectable()
export class TagsService {
    constructor(@InjectRepository(Tag) private tagRepos: Repository<Tag>) {
    }

    async getAll() {
        const tags = await this.tagRepos.find();
        return tags;
    }

    async getOne(id: string) {
        return await this.tagRepos.find({where: {id: id}});
    }

    async create(data: TagDto) {
        const createdTag = await this.tagRepos.save(data);
        return {inserted: createdTag};
    }

    async update(id: string, data: Partial<TagDto>) {
        return await this.tagRepos.update({id: id}, data);

    }

    async delete(id: string) {
        return await this.tagRepos.delete({id: id});
    }

}
