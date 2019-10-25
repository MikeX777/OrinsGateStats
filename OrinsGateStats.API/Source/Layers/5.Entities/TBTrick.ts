import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TBCharacterTrick } from "./TBCharacterTrick";

@Entity()
export class TBTrick {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @OneToMany(() => TBCharacterTrick, characterTrick => characterTrick.Trick)
    CharacterTricks: TBCharacterTrick[];
}
