import { ModelBase } from '../../Infrastructure/BaseClasses/ModelBase';
import { IResult } from '../../Infrastructure/Interfaces/IResult';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { GetCharacterQuery } from '../4.Data/QueryLayer/1.Queries/Character/GetCharacterQuery';
import { GetCharacterResult } from '../4.Data/QueryLayer/3.Results/Character/GetCharacterResult';
import { LazyLoad } from '../../Infrastructure/LazyLoad';
import { Race } from './Race';
import { GetRaceQuery } from '../4.Data/QueryLayer/1.Queries/Race/GetRaceQuery';
import { GetRaceResult } from '../4.Data/QueryLayer/3.Results/Race/GetRaceResult';

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
        console.log('I am here');
        let result = await this.queryContainer.ExecuteQuery<GetRaceQuery, GetRaceResult>(
            new GetRaceQuery(this.RaceID)
        );

        if (result !== undefined) {
            this._race = new Race(result.ID, this.queryContainer, result);
        }
    }

}