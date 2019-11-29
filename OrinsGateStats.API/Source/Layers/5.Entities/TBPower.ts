import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TBCharacterPower } from "./TBCharacterPower";

@Entity()
export class TBPower {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    Level: number

    @OneToMany(() => TBCharacterPower, characterPower => characterPower.Power)
    CharacterPowers: TBCharacterPower[];
}