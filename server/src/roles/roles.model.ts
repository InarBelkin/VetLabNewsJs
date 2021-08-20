import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/users.entity";

@Entity()
export  class Role{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false, unique:true})
    name: string;


    @Column({nullable: true})
    description: string;





}