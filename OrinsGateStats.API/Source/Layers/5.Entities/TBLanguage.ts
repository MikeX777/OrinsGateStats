import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCharacterLanguage } from './TBCharacterLanguage';

@Entity()
export class TBLanguage {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBCharacterLanguage, (characterLanguage) => characterLanguage.Language)
    public CharacterLanguages: TBCharacterLanguage[];
}
