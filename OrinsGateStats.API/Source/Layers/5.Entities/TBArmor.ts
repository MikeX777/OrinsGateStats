import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBArmor {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    Bonus: number;

    @OneToMany(() => TBCharacter, character => character.Armor)
    Characters: TBCharacter[];
}
