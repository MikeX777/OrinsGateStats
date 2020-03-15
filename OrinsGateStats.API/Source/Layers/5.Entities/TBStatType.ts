import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBFeatBonus } from './TBFeatBonus';
import { TBRaceBonus } from './TBRaceBonus';

@Entity()
export class TBStatType {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Type: string;

    @OneToMany(() => TBFeatBonus, (featBonus) => featBonus.StatType)
    public FeatBonuses: TBFeatBonus[];

    @OneToMany(() => TBRaceBonus, (raceBonus) => raceBonus.StatType)
    public RaceBonuses: TBRaceBonus[];
}
