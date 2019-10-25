import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TBFeatBonus } from "./TBFeatBonus";

@Entity()
export class TBBonus {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Modifier: number;

    @OneToMany(() => TBFeatBonus, featBonus => featBonus.Bonus)
    FeatBonuses: TBFeatBonus[];
}
