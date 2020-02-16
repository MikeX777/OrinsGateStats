import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacterFeat } from './TBCharacterFeat';
import { TBFeatBonus } from './TBFeatBonus';

@Entity()
export class TBFeat {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Text: string;

    @OneToMany(() => TBFeatBonus, (featBonus) => featBonus.Feat)
    public FeatBonuses: TBFeatBonus[];

    @OneToMany(() => TBCharacterFeat, (characterFeat) => characterFeat.Feat)
    public CharacterFeats: TBCharacterFeat[];
}
