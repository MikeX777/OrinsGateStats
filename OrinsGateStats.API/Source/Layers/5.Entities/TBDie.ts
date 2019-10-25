import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TBCharacterClass } from './TBCharacterClass';

@Entity()
export class TBDie {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    Value: number;

    @OneToMany(() => TBCharacterClass, characterClass => characterClass.HitDie)
    CharacterClassHitDice: TBCharacterClass[];
}
