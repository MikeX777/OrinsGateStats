import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBLanguage } from './TBLanguage';

@Entity()
export class TBCharacterLanguage {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBCharacter, (character) => character.CharacterLanguages)
    @JoinColumn({ name: 'CharacterID' })
    public Character: TBCharacter;

    @Column()
    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Character)
    public CharacterID: number;

    @ManyToOne(() => TBLanguage, (language) => language.CharacterLanguages)
    @JoinColumn({ name: 'LanguageID' })
    public Language: TBLanguage;

    @Column()
    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Language)
    public LanguageID: number;
}
