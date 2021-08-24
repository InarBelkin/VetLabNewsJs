import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {User} from "../users/users.entity";
import {Role} from "../roles/roles.entity";
import {Tag} from "../tags/tags.entity";

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // @Column("text", {nullable: false})
    // themeId: string[];

    @Column({nullable: false})
    title: string;

    @Column("date",{nullable:false})
    date: Date;

    @Column({nullable: false})
    contentPreview: string;

    @Column({nullable: false})
    content: string;

    @Column("boolean",{nullable:false,default:false})
    deleted: boolean;

    @ManyToOne(()=>User, user=>user.posts)
    @JoinColumn({name:"userId"})
    user: User;

    @ManyToMany(()=>Tag)
    @JoinTable()
    tags:Tag[]

}