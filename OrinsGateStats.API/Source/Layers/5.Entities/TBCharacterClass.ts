import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBDie } from './TBDie';

@Entity()
export class TBCharacterClass {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @ManyToOne(() => TBDie, (die) => die.CharacterClassHitDice)
    @JoinColumn({ name: 'HitDieID' })
    public HitDie: TBDie;

    @Column()
    @RelationId((CharacterClass: TBCharacterClass) => CharacterClass.HitDie)
    public HitDieID: number;

    @OneToMany(() => TBCharacter, (character) => character.CharacterClass)
    public Characters: TBCharacter[];
}
