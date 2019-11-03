import { ModelBase } from '../../../Infrastructure/BaseClasses/ModelBase';
import { IResult } from '../../../Infrastructure/Interfaces/IResult';
import { QueryContainer } from '../../../Infrastructure/DependancyInversion/QueryContainer';
import { CharacterDashboradDto } from '../../2.Services/DtoModels/Character/CharacterDashboardDto';
import { GetCharacterDomainQuery } from '../../4.Data/QueryLayer/1.Queries/Character/GetCharacterDomainQuery';
import { GetCharacterDomainResult } from '../../4.Data/QueryLayer/3.Results/Character/GetCharacterDomainResult';
import { StatType } from './SubObjects/StatType';
import { Sub_Armor } from './SubObjects/Sub_Armor';
import { Sub_Campaign as Sub_Campaign } from './SubObjects/Sub_Campaign';
import { Sub_CharacterClass } from './SubObjects/Sub_CharacterClass';
import { Sub_Feat } from './SubObjects/Sub_Feat';
import { Sub_Language } from './SubObjects/Sub_Language';
import { Sub_Player } from './SubObjects/Sub_Player';
import { Sub_Power } from './SubObjects/Sub_Power';
import { Sub_Race } from './SubObjects/Sub_Race';
import { Sub_Shield } from './SubObjects/Sub_Shield';
import { Sub_Trick } from './SubObjects/Sub_Trick';

export class Character extends ModelBase<number> {

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
    Exhaustsion: number;


    constructor(id: number, queryContainer: QueryContainer, result?: IResult) {
        super(id, queryContainer, result);
    }

    public async BuildCharacterDashboard(): Promise<CharacterDashboradDto> {

        let dashboard: CharacterDashboradDto = {
            ID: this.ID,
            CharacterName: this.Name,
            Level: this.MaxHitDice,
            Conscious: this.Conscious,
            Alive: this.Alive,
            Stable: this.Stable,
            MaxHealth: this.MaxHealth,
            CurrentHealth: this.CurrentHealth,
            ArmorClass: 8 + this.Shield?.Bonus + this.Armor.Bonus,
            Strength: this.Strength,
            StrengthModifier: Math.floor((this.Strength - 10) / 2),
            Dexterity: this.Dexterity,
            DexterityModifier: Math.floor((this.Dexterity - 10) / 2),
            Constitution: this.Constitution,
            ConstitutionModifier: Math.floor((this.Constitution - 10) / 2),
            Intelligence: this.Intelligence,
            IntelligenceModifier: Math.floor((this.Intelligence - 10) / 2),
            Wisdom: this.Wisdom,
            WisdomModifier: Math.floor((this.Wisdom - 10) / 2),
            Charisma: this.Charisma,
            CharismaModifier: Math.floor((this.Charisma - 10) / 2),
            ProficiencyBonus: this.ProficiencyBonus,
            Speed: this.Speed,
            Copper: this.Copper,
            Silver: this.Silver,
            Gold: this.Gold,
            MaxHitDice: this.MaxHitDice,
            CurrentHitDice: this.CurrentHitDice,
            Exhaustion: this.Exhaustsion,
            CampaignName: this.Campaign?.Name ?? '',
            CharacterClassName: this.CharacterClass?.Name ?? '',
            PlayerName: this.Player?.Name ?? '',
            RaceName: this.Race?.Name ?? ''
        }

        return dashboard;
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            let result = await this.queryContainer.ExecuteQuery<GetCharacterDomainQuery, GetCharacterDomainResult>(
                new GetCharacterDomainQuery(this.ID)
            );

            if (result !== undefined) {
                this.MapResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
    }

    private _Armor : Sub_Armor;
    public get Armor() : Sub_Armor {
        return this._Armor;
    }
    public set Armor(v : Sub_Armor) {
        this._Armor = v;
    }
    
    private _Campaign : Sub_Campaign;
    public get Campaign() : Sub_Campaign {
        return this._Campaign;
    }
    public set Campaign(v : Sub_Campaign) {
        this._Campaign = v;
    }
    
    private _CharacterClass : Sub_CharacterClass;
    public get CharacterClass() : Sub_CharacterClass {
        return this._CharacterClass;
    }
    public set CharacterClass(v : Sub_CharacterClass) {
        this._CharacterClass = v;
    }
    
    private _Player : Sub_Player;
    public get Player() : Sub_Player {
        return this._Player;
    }
    public set Player(v : Sub_Player) {
        this._Player = v;
    }
    
    private _Race : Sub_Race;
    public get Race() : Sub_Race {
        return this._Race;
    }
    public set Race(v : Sub_Race) {
        this._Race = v;
    }
    
    private _Shield : Sub_Shield;
    public get Shield() : Sub_Shield {
        return this._Shield;
    }
    public set Shield(v : Sub_Shield) {
        this._Shield = v;
    }
  
    private _Feats : Sub_Feat[];
    public get Feats() : Sub_Feat[] {
        return this._Feats;
    }
    public set Feats(v : Sub_Feat[]) {
        this._Feats = v;
    }

    private _Languages : Sub_Language[];
    public get Language() : Sub_Language[] {
        return this._Languages;
    }
    public set Language(v : Sub_Language[]) {
        this._Languages = v;
    }
    
    private _Powers : Sub_Power[];
    public get Powers() : Sub_Power[] {
        return this._Powers;
    }
    public set Powers(v : Sub_Power[]) {
        this._Powers = v;
    }
    
    private _Tricks : Sub_Trick[];
    public get Tricks() : Sub_Trick[] {
        return this._Tricks;
    }
    public set Tricks(v : Sub_Trick[]) {
        this._Tricks = v;
    }
    
    private MapResult(result: GetCharacterDomainResult): void {
        this.ID = result.ID;
        this.Name = result.Name;
        this.Conscious = result.Conscious;
        this.Alive = result.Alive;
        this.Stable = result.Stable;
        this.MaxHealth = result.MaxHealth;
        this.CurrentHealth = result.CurrentHealth;
        this.Strength = result.Strength;
        this.Dexterity = result.Dexterity;
        this.Constitution = result.Constitution;
        this.Intelligence = result.Intelligence;
        this.Wisdom = result.Wisdom;
        this.Charisma = result.Charisma;
        this.ProficiencyBonus = result.ProficiencyBonus;
        this.Speed = result.Speed;
        this.Copper = result.Copper;
        this.Silver = result.Silver;
        this.Gold = result.Gold;
        this.MaxHitDice = result.MaxHitDice;
        this.CurrentHitDice = result.CurrentHitDice;
        this.Exhaustsion = result.Exhaustion;
        
        this._Armor = {
            ID: result.Armor.ID,
            Name: result.Armor.Name,
            Bonus: result.Armor.Bonus
        };

        this._Campaign = {
            ID: result.Campaign.ID,
            Name: result.Campaign.Name
        };

        this._CharacterClass = {
            ID: result.CharacterClass.ID,
            Name: result.CharacterClass.Name,
            BaseHitDie: { 
                ID: result.CharacterClass.HitDie.ID,
                Name: result.CharacterClass.HitDie.Name,
                Value: result.CharacterClass.HitDie.Value
            }
        };

        this._Player =  {
            ID: result.Player.ID,
            Name: result.Player.Name
        };

        this._Race = {
            ID: result.Race.ID,
            Name: result.Race.Name
        };

        this._Shield = {
            ID: result.Shield.ID,
            Name: result.Shield.Name,
            Bonus: result.Shield.Bonus
        }

        this._Feats = result.CharacterFeats.map(cf => {
            return {
                ID: cf.ID,
                Text: cf.Feat.Text,
                Bonuses: cf.Feat.FeatBonuses.map(b => {
                    return {
                        ID: b.ID,
                        StatType: StatType[b.StatType.Type],
                        Modifier: b.Bonus.Modifier
                    }
                })
            }
        });

        this._Languages = result.CharacterLanguages.map(cl => {
            return {
                ID: cl.ID,
                Name: cl.Language.Name
            }
        });

        this._Powers = result.CharacterPowers.map(cp => {
            return {
                ID: cp.ID,
                Name: cp.Power.Name,
                Level: cp.Power.Level
            }
        });

        this._Tricks = result.CharacterTricks.map(ct => {
            return {
                ID: ct.ID,
                Name: ct.Trick.Name
            }
        });
    }

}