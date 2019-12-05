import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany, JoinColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBDie } from './TBDie';

@Entity()
export class TBCharacterClass {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @ManyToOne(() => TBDie, die => die.CharacterClassHitDice)
    @JoinColumn({ name: 'HitDieID' })
    HitDie: TBDie;

    @Column()
    @RelationId((CharacterClass: TBCharacterClass) => CharacterClass.HitDie)
    HitDieID: number;

    @OneToMany(() => TBCharacter, character => character.CharacterClass)
    Characters: TBCharacter[];
}
