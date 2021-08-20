import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostEntity} from "../posts/posts.entity";

@Entity()
export class Theme {
    @PrimaryGeneratedColumn("uuid")
    id: string;


    @Column({nullable: false,unique:true})
    name: string;

    @Column({nullable: true})
    description: string;

    @ManyToMany(type => PostEntity, post=>post.themes )
    @JoinTable()
    posts:PostEntity[];

}