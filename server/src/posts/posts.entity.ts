import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Theme} from "../themes/themes.entity";
import {ThemesService} from "../themes/themes.service";
import {User} from "../users/users.entity";

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // @Column("text", {nullable: false})
    // themeId: string[];

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    content: string;

    @Column("boolean",{nullable:false,default:false})
    deleted: boolean;

    @Column({nullable: true})
    userId: string;


    @ManyToMany(type => Theme, theme=>theme.posts)
    themes:Theme[];

    @ManyToOne(()=>User, user=>user.posts)
    @JoinColumn({name:"userId"})
    user: User;

}