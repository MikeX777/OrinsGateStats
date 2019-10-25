import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBShield {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @Column()
    Bonus: number;

    @OneToMany(() => TBCharacter, character => character.Shield)
    Characters: TBCharacter[];
}
