import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacterTrick } from './TBCharacterTrick';

@Entity()
export class TBTrick {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBCharacterTrick, (characterTrick) => characterTrick.Trick)
    public CharacterTricks: TBCharacterTrick[];
}
