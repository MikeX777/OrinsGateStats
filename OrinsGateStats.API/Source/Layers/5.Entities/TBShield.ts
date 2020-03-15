import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBShield {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Bonus: number;

    @OneToMany(() => TBCharacter, (character) => character.Shield)
    public Characters: TBCharacter[];
}
