import { Sub_CharacterClass } from './Sub_CharacterClass';
import { Sub_Feat } from './Sub_Feats';
import { Sub_Language } from './Sub_Language';
import { Sub_Power } from './Sub_Power';
import { Sub_Race } from './Sub_Race';
import { Sub_Trick } from './Sub_Trick';

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
    public Exhaustion: number;
    public Race: Sub_Race;
    public CharacterClass: Sub_CharacterClass;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
    public Languages: Sub_Language[];
    public Feats: Sub_Feat[];
    public Tricks: Sub_Trick[];
    public Powers: Sub_Power[];
}
