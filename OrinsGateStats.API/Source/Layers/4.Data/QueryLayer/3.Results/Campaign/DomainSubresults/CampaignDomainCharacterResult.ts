import { CampaignDomainCharacterClassResult } from './CampaignDomainCharacterClassResult';
import { CampaignDomainCharacterFeatResult } from './CampaignDomainCharacterFeatResult';
import { CampaignDomainCharacterLanguageResult } from './CampaignDomainCharacterLanguageResult';
import { CampaignDomainCharacterPowerResult } from './CampaignDomainCharacterPowerResult';
import { CampaignDomainCharacterTrickResult } from './CampaignDomainCharacterTrickResult';
import { CampaignDomainRaceResult } from './CampaignDomainRaceResult';

export class CampaignDomainCharacterResult {

    public ID: number;
    public Name: string;
    public Conscious: boolean;
    public Alive: boolean;
    public Stable: boolean;
    public MaxHealth: number;
    public CurrentHealth: number;
    public Strength: number;
    public Dexterity: number;
    public Constitution: number;
    public Intelligence: number;
    public Wisdom: number;
    public Charisma: number;
    public Speed: number;
    public Copper: number;
    public Silver: number;
    public Gold: number;
    public Platinum: number;
    public MaxHitDice: number;
    public CurrentHitDice: number;
    public Exhaustion: number;
    public Race: CampaignDomainRaceResult;
    public CharacterClass: CampaignDomainCharacterClassResult;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
    public Languages: CampaignDomainCharacterLanguageResult[];
    public Feats: CampaignDomainCharacterFeatResult[];
    public Tricks: CampaignDomainCharacterTrickResult[];
    public Powers: CampaignDomainCharacterPowerResult[];
}
