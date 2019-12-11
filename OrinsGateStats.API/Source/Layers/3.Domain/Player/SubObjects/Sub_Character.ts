import { Sub_Campaign } from './Sub_Campaign';
import { Sub_CharacterClass } from './Sub_CharacterClass';
import { Sub_Race } from './Sub_Race';

export class Sub_Character {

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
    public Exhaustsion: number;
    public Race: Sub_Race;
    public CharacterClass: Sub_CharacterClass;
    public Campaign: Sub_Campaign;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
    public LanguageIDs: number[];
    public FeatIDs: number[];
    public TrickIDs: number[];
    public PowerIDs: number[];
}
