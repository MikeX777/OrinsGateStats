import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBBonus } from './TBBonus';
import { TBRace } from './TBRace';
import { TBStatType } from './TBStatType';

@Entity()
export class TBRaceBonus {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBRace, (race) => race.RaceBonuses)
    @JoinColumn({ name: 'RaceID' })
    public Race: TBRace;

    @Column()
    @RelationId((RaceBonus: TBRaceBonus) => RaceBonus.Race)
    public RaceID: number;

    @Column()
    public Bonus: number;

    @ManyToOne(() => TBStatType, (statType) => statType.RaceBonuses)
    @JoinColumn({ name: 'StatTypeID' })
    public StatType: TBStatType;

    @Column()
    @RelationId((RaceBonus: TBRaceBonus) => RaceBonus.StatType)
    public StatTypeID: number;
}
