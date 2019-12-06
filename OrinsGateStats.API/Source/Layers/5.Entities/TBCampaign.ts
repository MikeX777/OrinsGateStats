import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBCampaign {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBCharacter, (character) => character.Campaign)
    public Characters: TBCharacter[];
}
