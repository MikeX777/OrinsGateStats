import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';
import { CharacterDomainRaceResult } from '../DomainSubResults/CharacterDomainRaceResult';
import { CharacterDomainCharacterClassResult } from '../DomainSubResults/CharacterDomainCharacterClassResult';
import { CharacterDomainCampaignResult } from '../DomainSubResults/CharacterDomainCampaignResult';
import { CharacterDomainPlayerResult } from '../DomainSubResults/CharacterDomainPlayerResult';
import { CharacterDomainArmorResult } from '../DomainSubResults/CharacterDomainArmorResult';
import { CharacterDomainShieldResult } from '../DomainSubResults/CharacterDomainShieldResult';
import { CharacterDomainCharacterLanguageResult } from '../DomainSubResults/CharacterDomainCharacterLanguageResult';
import { CharacterDomainCharacterTrickResult } from '../DomainSubResults/CharacterDomainCharacterTrickResult';
import { CharacterDomainCharacterFeatResult } from '../DomainSubResults/CharacterDomainCharacterFeatResult';
import { CharacterDomainCharacterPowerResult } from '../DomainSubResults/CharacterDomainCharacterPowerResult';

export class GetCharacterDomainResult implements IResult {
    ID: number;
    Name: string;
    Conscious: boolean;
    Alive: boolean;
    Stable: boolean;
    MaxHealth: number;
    CurrentHealth: number;
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
    Exhaustion: number;
    Armor: CharacterDomainArmorResult;
    Campaign: CharacterDomainCampaignResult;
    CharacterClass: CharacterDomainCharacterClassResult;
    Player: CharacterDomainPlayerResult;
    Race: CharacterDomainRaceResult;
    Shield: CharacterDomainShieldResult;
    CharacterFeats: CharacterDomainCharacterFeatResult[];
    CharacterLanguages: CharacterDomainCharacterLanguageResult[];
    CharacterPowers: CharacterDomainCharacterPowerResult[];
    CharacterTricks: CharacterDomainCharacterTrickResult[];
}