import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBRace {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBCharacter, (character) => character.Race)
    public Characters: TBCharacter[];
}
