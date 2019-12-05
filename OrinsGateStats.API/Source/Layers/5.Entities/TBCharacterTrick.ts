import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, Column } from "typeorm";
import { TBCharacter } from "./TBCharacter";
import { TBTrick } from "./TBTrick";

@Entity()
export class TBCharacterTrick {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterTricks)
    @JoinColumn({ name: 'CharacterID' })
    Character: TBCharacter;

    @Column()
    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Character)
    CharacterID: number;

    @ManyToOne(() => TBTrick, trick => trick.CharacterTricks)
    @JoinColumn({ name: 'TrickID' })
    Trick: TBTrick;

    @Column()
    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Trick)
    TrickID: number;
}
