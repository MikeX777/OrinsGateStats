import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, Column } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBFeat } from "./TBFeat";

@Entity()
export class TBCharacterFeat{

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterFeats)
    @JoinColumn({ name: 'CharacterID' })
    Character: TBCharacter;

    @Column()
    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Character)
    CharacterID: number;

    @ManyToOne(() => TBFeat, feat => feat.CharacterFeats)
    @JoinColumn({ name: 'FeatID' })
    Feat: TBFeat;

    @Column()
    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Feat)
    FeatID: number;
}
