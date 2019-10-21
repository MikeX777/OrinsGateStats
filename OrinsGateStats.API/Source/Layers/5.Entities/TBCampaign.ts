import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBCampaign {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @OneToMany(() => TBCharacter, character => character.Campaign)
    Characters: TBCharacter[];
}