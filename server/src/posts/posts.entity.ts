import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {User} from "../users/users.entity";
import {Role} from "../roles/roles.entity";
import {Tag} from "../tags/tags.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class PostEntity {
    @ApiProperty({description:'строковый id'})
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // @Column("text", {nullable: false})
    // themeId: string[];

    @ApiProperty({example:'Новая вакцина',description:'Заголовок'})
    @Column({nullable: false})
    title: string;

    @ApiProperty({example:'20.02.2021',description:'дата написания, для сортировки',})
    @Column({nullable:false, default: new Date()})
    date: Date;

    @ApiProperty({description:'Эта часть стати отображается и в списке новостей,и при открытии новости в самом верху',})
    @Column({nullable: false})
    contentPreview: string;

    @ApiProperty({description:'Это основная часть статьи'})
    @Column({nullable: false})
    content: string;

    @ApiProperty({description:'если true, статья не отображается в списке'})
    @Column("boolean",{nullable:false,default:false})
    deleted: boolean;

    @ManyToOne(()=>User, user=>user.posts)
    @JoinColumn({name:"userId"})
    user: User;

    @ManyToMany(()=>Tag)
    @JoinTable()
    tags:Tag[]

}