import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';

export class GetCharacterResult implements IResult {
    public ID: number;
    public Name: string;
    public Conscious: boolean;
    public Alive: boolean;
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
    public RaceID: number;
    public CharacterClassID: number;
    public CampaignID: number;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
}
