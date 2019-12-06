import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBArmor {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Bonus: number;

    @OneToMany(() => TBCharacter, (character) => character.Armor)
    public Characters: TBCharacter[];
}
