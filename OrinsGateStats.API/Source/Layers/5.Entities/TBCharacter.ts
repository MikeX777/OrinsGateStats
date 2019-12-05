import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany, JoinColumn } from 'typeorm';
import { TBRace } from './TBRace';
import { TBCharacterClass } from './TBCharacterClass';
import { TBCampaign } from './TBCampaign';
import { TBPlayer } from './TBPlayer';
import { TBArmor } from './TBArmor';
import { TBShield } from './TBShield';
import { TBCharacterLanguage } from './TBCharacterLanguage';
import { TBCharacterFeat } from './TBCharacterFeat';
import { TBCharacterTrick } from './TBCharacterTrick';
import { TBCharacterPower } from './TBCharacterPower';

@Entity()
export class TBCharacter {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;
    
    @Column()
    Conscious: boolean;

    @Column()
    Alive: boolean;

    @Column()
    Stable: boolean;

    @Column()
    MaxHealth: number;

    @Column()
    CurrentHealth: number;

    @Column()
    Strength: number;

    @Column()
    Dexterity: number;

    @Column()
    Constitution: number;

    @Column()
    Intelligence: number;

    @Column()
    Wisdom: number;

    @Column()
    Charisma: number;

    @Column()
    ProficiencyBonus: number;

    @Column()
    Speed: number;

    @Column()
    Copper: number;

    @Column()
    Silver: number;

    @Column()
    Gold: number;

    @Column()
    MaxHitDice: number;

    @Column()
    CurrentHitDice: number;

    @Column()
    Exhaustion: number;

    @ManyToOne(() => TBRace, race => race.Characters)
    @JoinColumn({ name: 'RaceID'})
    Race: TBRace;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Race)
    RaceID: number;

    @ManyToOne(() => TBCharacterClass, characterClass => characterClass.Characters)
    @JoinColumn({ name: 'CharacterClassID' })
    CharacterClass: TBCharacterClass;

    @Column()
    @RelationId((Character: TBCharacter) => Character.CharacterClass)
    CharacterClassID: number;

    @ManyToOne(() => TBCampaign, campaign => campaign.Characters)
    @JoinColumn({ name: 'CampaignID' })
    Campaign: TBCampaign;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Campaign)
    CampaignID: number;

    @ManyToOne(() => TBPlayer, player => player.Characters)
    @JoinColumn({ name: 'PlayerID' })
    Player: TBPlayer;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Player)
    PlayerID: number;

    @ManyToOne(() => TBArmor, armor => armor.Characters)
    @JoinColumn({ name: 'ArmorID' })
    Armor: TBArmor;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Armor)
    ArmorID: number;

    @ManyToOne(() => TBShield, shield => shield.Characters)
    @JoinColumn({ name: 'ShieldID' })
    Shield: TBShield;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Shield)
    ShieldID: number;

    @OneToMany(() => TBCharacterLanguage, characterLanguage => characterLanguage.Character, { onDelete: 'CASCADE' })
    CharacterLanguages: TBCharacterLanguage[];

    @OneToMany(() => TBCharacterFeat, characterFeat => characterFeat.Character, { onDelete: 'CASCADE' })
    CharacterFeats: TBCharacterFeat[];

    @OneToMany(() => TBCharacterTrick, characterTrick => characterTrick.Character, { onDelete: 'CASCADE' })
    CharacterTricks: TBCharacterTrick[];

    @OneToMany(() => TBCharacterPower, characterPower => characterPower.Character, { onDelete: 'CASCADE' })
    CharacterPowers: TBCharacterPower[];
}
