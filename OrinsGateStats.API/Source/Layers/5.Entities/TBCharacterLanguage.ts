import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBLanguage } from './TBLanguage';

@Entity()
export class TBCharacterLanguage {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterLanguages)
    Character: TBCharacter;

    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Character)
    CharacterID: number;

    @ManyToOne(() => TBLanguage, language => language.CharacterLanguages)
    Language: TBLanguage;

    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Language)
    LanguageID: number;
}
