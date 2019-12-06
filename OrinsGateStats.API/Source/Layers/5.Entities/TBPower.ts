import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacterPower } from './TBCharacterPower';

@Entity()
export class TBPower {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Level: number;

    @OneToMany(() => TBCharacterPower, (characterPower) => characterPower.Power)
    public CharacterPowers: TBCharacterPower[];
}
