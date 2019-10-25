import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TBFeatBonus } from "./TBFeatBonus";

@Entity()
export class TBStatType {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Type: string;

    @OneToMany(() => TBFeatBonus, featBonus => featBonus.StatType)
    FeatBonuses: TBFeatBonus[];
}
