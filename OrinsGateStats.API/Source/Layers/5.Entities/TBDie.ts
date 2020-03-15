import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacterClass } from './TBCharacterClass';

@Entity()
export class TBDie {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Value: number;

    @OneToMany(() => TBCharacterClass, (characterClass) => characterClass.HitDie)
    public CharacterClassHitDice: TBCharacterClass[];
}
