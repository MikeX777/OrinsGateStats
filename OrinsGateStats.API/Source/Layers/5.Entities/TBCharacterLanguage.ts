import { Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, Column } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBLanguage } from './TBLanguage';

@Entity()
export class TBCharacterLanguage {

    @PrimaryGeneratedColumn()
    ID: number;

    @ManyToOne(() => TBCharacter, character => character.CharacterLanguages)
    @JoinColumn({ name: 'CharacterID' })
    Character: TBCharacter;

    @Column()
    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Character)
    CharacterID: number;

    @ManyToOne(() => TBLanguage, language => language.CharacterLanguages)
    @JoinColumn({ name: 'LanguageID' })
    Language: TBLanguage;

    @Column()
    @RelationId((CharacterLanguage: TBCharacterLanguage) => CharacterLanguage.Language)
    LanguageID: number;
}
