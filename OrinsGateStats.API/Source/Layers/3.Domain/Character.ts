import { ModelBase } from '../../Infrastructure/BaseClasses/ModelBase';
import { IResult } from '../../Infrastructure/Interfaces/IResult';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { GetCharacterQuery } from '../4.Data/QueryLayer/1.Queries/Character/GetCharacterQuery';
import { GetCharacterResult } from '../4.Data/QueryLayer/3.Results/Character/GetCharacterResult';
import { LazyLoad } from '../../Infrastructure/LazyLoad';
import { Race } from './Race';
import { GetRaceQuery } from '../4.Data/QueryLayer/1.Queries/Race/GetRaceQuery';
import { GetRaceResult } from '../4.Data/QueryLayer/3.Results/Race/GetRaceResult';
import { CharacterDashboradDto } from '../2.Services/DtoModels/Character/CharacterDashboardDto';

export class Character extends ModelBase<number> {

    private _lazyRace: LazyLoad;
    private _race: Race;

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
    
    public async Race() : Promise<Race> {
        await this._lazyRace.Execute();
        return this._race;
    }
    


    constructor(id: number, queryContainer: QueryContainer, result?: IResult) {
        super(id, queryContainer, result);

        this._lazyRace = new LazyLoad(this.LoadRace.bind(this));
    }

    public async BuildCharacterDashboard(): Promise<CharacterDashboradDto> {

        let dashboard: CharacterDashboradDto = {
            ID: this.ID,
            CharacterName: this.Name,
            Level: this.MaxHitDice,
            Conscious: this.Conscious,
            Alive: this.Alive,
            MaxHealth: this.MaxHealth,
            CurrentHealth: this.CurrentHealth,
            ArmorClass: this.ArmorClass,
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
            RaceName: (await this.Race())?.Name ?? ''
        }

        return null;
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            let result = await this.queryContainer.ExecuteQuery<GetCharacterQuery, GetCharacterResult>(
                new GetCharacterQuery(this.ID)
            );

            if (result !== undefined) {
                this.AssignResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
    }

    private async LoadRace(): Promise<void> {
        let result = await this.queryContainer.ExecuteQuery<GetRaceQuery, GetRaceResult>(
            new GetRaceQuery(this.RaceID)
        );

        if (result !== undefined) {
            this._race = new Race(result.ID, this.queryContainer, result);
        }
    }

}