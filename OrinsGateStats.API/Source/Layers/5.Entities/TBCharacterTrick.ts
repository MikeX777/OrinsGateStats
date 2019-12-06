import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBTrick } from './TBTrick';

@Entity()
export class TBCharacterTrick {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBCharacter, (character) => character.CharacterTricks)
    @JoinColumn({ name: 'CharacterID' })
    public Character: TBCharacter;

    @Column()
    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Character)
    public CharacterID: number;

    @ManyToOne(() => TBTrick, (trick) => trick.CharacterTricks)
    @JoinColumn({ name: 'TrickID' })
    public Trick: TBTrick;

    @Column()
    @RelationId((CharacterTrick: TBCharacterTrick) => CharacterTrick.Trick)
    public TrickID: number;
}
