import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TBCharacterLanguage } from './TBCharacterLanguage';

@Entity()
export class TBLanguage {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @OneToMany(() => TBCharacterLanguage, characterLanguage => characterLanguage.Language)
    CharacterLanguages: TBCharacterLanguage[];
}
