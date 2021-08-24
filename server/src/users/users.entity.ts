import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostEntity} from "../posts/posts.entity";
import {Role} from "../roles/roles.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false, unique:true})
    email:string;

    @Column({nullable: false})
    password:string;



    @OneToMany(()=>PostEntity,post=>post.user)
    posts: PostEntity[];

    @ManyToMany(()=>Role)
    @JoinTable()
    roles:Role[]


}