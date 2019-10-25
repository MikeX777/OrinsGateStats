import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBPower } from "./TBPower";

@Entity()
export class TBCharacterPower {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterPowers)
    Character: TBCharacter;

    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Character)
    CharacterID: number;

    @ManyToOne(() => TBPower, power => power.CharacterPowers)
    Power: TBPower;

    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Power)
    PowerID: number;
}
