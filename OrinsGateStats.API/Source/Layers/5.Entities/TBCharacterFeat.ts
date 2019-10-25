import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBFeat } from "./TBFeat";

@Entity()
export class TBCharacterFeat{

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterFeats)
    Character: TBCharacter;

    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Character)
    CharacterID: number;

    @ManyToOne(() => TBFeat, feat => feat.CharacterFeats)
    Feat: TBFeat;

    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Feat)
    FeatID: number;
}
