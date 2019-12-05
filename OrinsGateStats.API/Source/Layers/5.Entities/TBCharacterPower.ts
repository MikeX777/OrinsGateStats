import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, Column } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBPower } from "./TBPower";

@Entity()
export class TBCharacterPower {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterPowers)
    @JoinColumn({ name: 'CharacterID' })
    Character: TBCharacter;

    @Column()
    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Character)
    CharacterID: number;

    @ManyToOne(() => TBPower, power => power.CharacterPowers)
    @JoinColumn({ name: 'PowerID' })
    Power: TBPower;

    @Column()
    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Power)
    PowerID: number;
}
