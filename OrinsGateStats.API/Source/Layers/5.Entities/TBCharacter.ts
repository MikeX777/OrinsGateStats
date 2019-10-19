import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import { TBRace } from './TBRace';
import { TBCharacterClass } from './TBCharacterClass';
import { TBCampaign } from './TBCampaign';
import { TBPlayer } from './TBPlayer';

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
    MaxHealth: number;

    @Column()
    CurrentHealth: number;

    @Column()
    ArmorClass: number;

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

    @ManyToOne(() => TBRace, race => race.Characters)
    Race: TBRace;

    @RelationId((Character: TBCharacter) => Character.Race)
    RaceID: number;

    @ManyToOne(() => TBCharacterClass, characterClass => characterClass.Characters)
    CharacterClass: TBCharacterClass;

    @RelationId((Character: TBCharacter) => Character.CharacterClass)
    CharacterClassID: number;

    @ManyToOne(() => TBCampaign, campaign => campaign.Characters)
    Campaign: TBCampaign;

    @RelationId((Character: TBCharacter) => Character.Campaign)
    CampaignID: number;

    @ManyToOne(() => TBPlayer, player => player.Characters)
    Player: TBPlayer;

    @RelationId((Character: TBCharacter) => Character.Player)
    PlayerID: number;
}