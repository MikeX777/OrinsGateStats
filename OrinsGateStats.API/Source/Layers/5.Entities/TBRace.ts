import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBRaceBonus } from './TBRaceBonus';

@Entity()
export class TBRace {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBRaceBonus, (raceBonus) => raceBonus.Race)
    public RaceBonuses: TBRaceBonus[];

    @OneToMany(() => TBCharacter, (character) => character.Race)
    public Characters: TBCharacter[];
}
