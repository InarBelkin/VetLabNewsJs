import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Theme} from "./themes.entity";
import {Repository} from "typeorm"
import {ThemesDto} from "./themes.dto";

@Injectable()
export class ThemesService {
    constructor(@InjectRepository(Theme) private themeRepository: Repository<Theme>) {
    }

    async getAll() {
        const themes = await this.themeRepository.find();
        return themes;
    }

    async getOne(id: string) {
        return await this.themeRepository.find({where: {id: id}});
    }

    async create(data: ThemesDto) {
        const createdTheme = await this.themeRepository.save(data);
        return {inserted: createdTheme};
    }

    async update(id: string, data: Partial<ThemesDto>) {
        return await this.themeRepository.update({id: id}, data);

    }

    async delete(id: string) {
        return await this.themeRepository.delete({id: id});
    }
}
