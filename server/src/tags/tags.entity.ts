import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../roles/roles.entity";

@Entity()
export class Tag{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false,unique:true})
    name: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    testMigration: string;




}