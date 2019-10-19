import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBPlayer {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @OneToMany(() => TBCharacter, character => character.Player)
    Characters: TBCharacter[];
}