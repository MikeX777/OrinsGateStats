import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, JoinColumn } from "typeorm";
import { TBFeat } from "./TBFeat";
import { TBBonus } from "./TBBonus";
import { TBStatType } from "./TBStatType";

@Entity()
export class TBFeatBonus {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBFeat, feat => feat.FeatBonuses)
    @JoinColumn({ name: 'FeatID' })
    Feat: TBFeat;

    @Column()
    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.Feat)
    FeatID: number;

    @ManyToOne(() => TBBonus, bonus => bonus.FeatBonuses)
    @JoinColumn({ name: 'BonusID' })
    Bonus: TBBonus;

    @Column()
    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.Bonus)
    BonusID: number;

    @ManyToOne(() => TBStatType, statType => statType.FeatBonuses)
    @JoinColumn({ name: 'StatTypeID' })
    StatType: TBStatType;

    @Column()
    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.StatType)
    StatTypeID: number;
}
