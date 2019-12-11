import { PlayerDomainCampaignResult } from './PlayerDomainCampaignResult';
import { PlayerDomainCharacterClassResult } from './PlayerDomainCharacterClassResult';
import { PlayerDomainRaceResult } from './PlayerDomainRaceResult';

export class PlayerDomainCharacterResult {

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
    public Race: PlayerDomainRaceResult;
    public CharacterClass: PlayerDomainCharacterClassResult;
    public Campaign: PlayerDomainCampaignResult;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
    public LanguageIDs: number[];
    public FeatIDs: number[];
    public TrickIDs: number[];
    public PowerIDs: number[];
}
