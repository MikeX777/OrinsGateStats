import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBFeat } from './TBFeat';

@Entity()
export class TBCharacterFeat {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBCharacter, (character) => character.CharacterFeats)
    @JoinColumn({ name: 'CharacterID' })
    public Character: TBCharacter;

    @Column()
    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Character)
    public CharacterID: number;

    @ManyToOne(() => TBFeat, (feat) => feat.CharacterFeats)
    @JoinColumn({ name: 'FeatID' })
    public Feat: TBFeat;

    @Column()
    @RelationId((CharacterFeat: TBCharacterFeat) => CharacterFeat.Feat)
    public FeatID: number;
}
