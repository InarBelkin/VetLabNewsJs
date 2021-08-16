import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


export class PostEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: false})
    userId: string;

    @Column("text", {nullable: false})
    themeId: string[];

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    content: string;

    @Column("boolean",{nullable:false,default:false})
    deleted: boolean;

}