import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';

export class GetCharacterResult implements IResult {
    ID: number;
    Name: string;
    Conscious: boolean;
    Alive: boolean;
    MaxHealth: number;
    CurrentHealth: number;
    ArmorClass: number;
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
    ProficiencyBonus: number;
    Speed: number;
    Copper: number;
    Silver: number;
    Gold: number;
    MaxHitDice: number;
    CurrentHitDice: number;
    RaceID: number;
    CharacterClassID: number;
    CampaignID: number;
    PlayerID: number;
}