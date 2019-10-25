import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from "typeorm";
import { TBFeat } from "./TBFeat";
import { TBBonus } from "./TBBonus";
import { TBStatType } from "./TBStatType";

@Entity()
export class TBFeatBonus {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBFeat, feat => feat.FeatBonuses)
    Feat: TBFeat;

    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.Feat)
    FeatID: number;

    @ManyToOne(() => TBBonus, bonus => bonus.FeatBonuses)
    Bonus: TBBonus;

    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.Bonus)
    BonusID: number;

    @ManyToOne(() => TBStatType, statType => statType.FeatBonuses)
    StatType: TBStatType;

    @RelationId((FeatBonus: TBFeatBonus) => FeatBonus.StatType)
    StatTypeID: number;
}
