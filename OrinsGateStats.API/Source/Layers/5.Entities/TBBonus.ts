import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBFeatBonus } from './TBFeatBonus';
import { TBRaceBonus } from './TBRaceBonus';

@Entity()
export class TBBonus {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Modifier: number;

    @OneToMany(() => TBFeatBonus, (featBonus) => featBonus.Bonus)
    public FeatBonuses: TBFeatBonus[];

    @OneToMany(() => TBRaceBonus, (raceBonus) => raceBonus.Bonus)
    public RaceBonuses: TBRaceBonus[];
}
