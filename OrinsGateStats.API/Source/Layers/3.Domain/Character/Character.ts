import { ModelBase } from '../../../Infrastructure/BaseClasses/ModelBase';
import { CommandContainer } from '../../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../../Infrastructure/DependancyInversion/QueryContainer';
import { IResult } from '../../../Infrastructure/Interfaces/IResult';
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
    public MaxHitDice: number;
    public CurrentHitDice: number;
    public Exhaustsion: number;

    private armor: Sub_Armor;
    public get Armor(): Sub_Armor {
        return this.armor;
    }
    public set Armor(v: Sub_Armor) {
        this.armor = v;
    }

    private campaign: Sub_Campaign;
    public get Campaign(): Sub_Campaign {
        return this.campaign;
    }
    public set Campaign(v: Sub_Campaign) {
        this.campaign = v;
    }

    private characterClass: Sub_CharacterClass;
    public get CharacterClass(): Sub_CharacterClass {
        return this.characterClass;
    }
    public set CharacterClass(v: Sub_CharacterClass) {
        this.characterClass = v;
    }

    private player: Sub_Player;
    public get Player(): Sub_Player {
        return this.player;
    }
    public set Player(v: Sub_Player) {
        this.player = v;
    }

    private race: Sub_Race;
    public get Race(): Sub_Race {
        return this.race;
    }
    public set Race(v: Sub_Race) {
        this.race = v;
    }

    private shield: Sub_Shield;
    public get Shield(): Sub_Shield {
        return this.shield;
    }
    public set Shield(v: Sub_Shield) {
        this.shield = v;
    }

    private feats: Sub_Feat[];
    public get Feats(): Sub_Feat[] {
        return this.feats;
    }
    public set Feats(v: Sub_Feat[]) {
        this.feats = v;
    }

    private languages: Sub_Language[];
    public get Language(): Sub_Language[] {
        return this.languages;
    }
    public set Language(v: Sub_Language[]) {
        this.languages = v;
    }

    private powers: Sub_Power[];
    public get Powers(): Sub_Power[] {
        return this.powers;
    }
    public set Powers(v: Sub_Power[]) {
        this.powers = v;
    }

    private tricks: Sub_Trick[];
    public get Tricks(): Sub_Trick[] {
        return this.tricks;
    }
    public set Tricks(v: Sub_Trick[]) {
        this.tricks = v;
    }

    constructor(id: number, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        super(id, queryContainer, commandContainer, result);
    }

    public async BuildCharacterDashboard(): Promise<CharacterDashboradDto> {

        const dashboard: CharacterDashboradDto = {
            ID: this.ID,
            CharacterName: this.Name,
            Level: this.MaxHitDice,
            Conscious: this.Conscious,
            Alive: this.Alive,
            Stable: this.Stable,
            MaxHealth: this.MaxHealth,
            CurrentHealth: this.CurrentHealth,
            ArmorClass: 8 + this.Shield?.Bonus + this.Armor?.Bonus,
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
            ProficiencyBonus: 2 + Math.floor(this.MaxHitDice / 4),
            Speed: this.Speed,
            Copper: this.Copper,
            Silver: this.Silver,
            Gold: this.Gold,
            MaxHitDice: this.MaxHitDice,
            CurrentHitDice: this.CurrentHitDice,
            Exhaustion: this.Exhaustsion,
            CampaignName: this.Campaign?.Name ?? '',
            CharacterClassName: this.CharacterClass?.Name ?? '',
            PlayerFirstName: this.Player?.FirstName ?? '',
            PlayerLastName: this.Player?.LastName ?? '',
            RaceName: this.Race?.Name ?? '',
        };

        return dashboard;
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            const result = await this.queryContainer.ExecuteQuery<GetCharacterDomainQuery, GetCharacterDomainResult>(
                new GetCharacterDomainQuery(this.ID),
            );

            if (result !== undefined) {
                this.MapResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
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
        this.Speed = result.Speed;
        this.Copper = result.Copper;
        this.Silver = result.Silver;
        this.Gold = result.Gold;
        this.MaxHitDice = result.MaxHitDice;
        this.CurrentHitDice = result.CurrentHitDice;
        this.Exhaustsion = result.Exhaustion;

        this.armor = {
            ID: result.Armor.ID,
            Name: result.Armor.Name,
            Bonus: result.Armor.Bonus,
        };

        this.campaign = {
            ID: result.Campaign.ID,
            Name: result.Campaign.Name,
        };

        this.characterClass = {
            ID: result.CharacterClass.ID,
            Name: result.CharacterClass.Name,
            BaseHitDie: {
                ID: result.CharacterClass.HitDie.ID,
                Name: result.CharacterClass.HitDie.Name,
                Value: result.CharacterClass.HitDie.Value,
            },
        };

        this.player =  {
            ID: result.Player.ID,
            Username: result.Player.Username,
            Password: result.Player.Password,
            Email: result.Player.Email,
            FirstName: result.Player.FirstName,
            LastName: result.Player.LastName,
        };

        this.race = {
            ID: result.Race.ID,
            Name: result.Race.Name,
        };

        this.shield = {
            ID: result.Shield.ID,
            Name: result.Shield.Name,
            Bonus: result.Shield.Bonus,
        };

        this.feats = result.CharacterFeats.map((cf) => {
            return {
                ID: cf.ID,
                Text: cf.Feat.Text,
                Bonuses: cf.Feat.FeatBonuses.map((b) => {
                    return {
                        ID: b.ID,
                        StatType: StatType[b.StatType.Type],
                        Modifier: b.Bonus.Modifier,
                    };
                }),
            };
        });

        this.languages = result.CharacterLanguages.map((cl) => {
            return {
                ID: cl.ID,
                Name: cl.Language.Name,
            };
        });

        this.powers = result.CharacterPowers.map((cp) => {
            return {
                ID: cp.ID,
                Name: cp.Power.Name,
                Level: cp.Power.Level,
            };
        });

        this.tricks = result.CharacterTricks.map((ct) => {
            return {
                ID: ct.ID,
                Name: ct.Trick.Name,
            };
        });
    }
}
