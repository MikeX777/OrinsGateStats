import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBTrick } from "./TBTrick";

@Entity()
export class TBCharacterTrick {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterTricks)
    Character: TBCharacter;

    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Character)
    CharacterID: number;

    @ManyToOne(() => TBTrick, trick => trick.CharacterTricks)
    Trick: TBTrick;

    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Trick)
    TrickID: number;
}
