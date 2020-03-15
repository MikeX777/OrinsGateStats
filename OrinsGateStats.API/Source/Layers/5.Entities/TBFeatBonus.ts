import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBBonus } from './TBBonus';
import { TBFeat } from './TBFeat';
import { TBStatType } from './TBStatType';

@Entity()
export class TBFeatBonus {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBFeat, (feat) => feat.FeatBonuses)
    @JoinColumn({ name: 'FeatID' })
    public Feat: TBFeat;

    @Column()
    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.Feat)
    public FeatID: number;

    @Column()
    public Bonus: number;

    @ManyToOne(() => TBStatType, (statType) => statType.FeatBonuses)
    @JoinColumn({ name: 'StatTypeID' })
    public StatType: TBStatType;

    @Column()
    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.StatType)
    public StatTypeID: number;
}
