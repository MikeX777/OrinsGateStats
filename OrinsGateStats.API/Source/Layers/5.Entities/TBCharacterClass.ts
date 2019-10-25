import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBDie } from './TBDie';

@Entity()
export class TBCharacterClass {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @ManyToOne(() => TBDie, die => die.CharacterClassHitDice)
    HitDie: TBDie;

    @RelationId((CharacterClass: TBCharacterClass) => CharacterClass.HitDie)
    HitDieID: number;

    @OneToMany(() => TBCharacter, character => character.CharacterClass)
    Characters: TBCharacter[];
}
