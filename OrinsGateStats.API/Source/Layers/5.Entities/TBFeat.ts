import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TBFeatBonus } from "./TBFeatBonus";
import { TBCharacterFeat } from "./TBCharacterFeat";

@Entity()
export class TBFeat {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Text: string;

    @OneToMany(() => TBFeatBonus, featBonus => featBonus.Feat)
    FeatBonuses: TBFeatBonus[];

    @OneToMany(() => TBCharacterFeat, characterFeat => characterFeat.Feat)
    CharacterFeats: TBCharacterFeat[];
}
