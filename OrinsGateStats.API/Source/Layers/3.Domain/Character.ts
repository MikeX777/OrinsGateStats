import { ModelBase } from '../../Infrastructure/BaseClasses/ModelBase';
import { IResult } from '../../Infrastructure/Interfaces/IResult';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { GetCharacterQuery } from '../4.Data/QueryLayer/1.Queries/Character/GetCharacterQuery';
import { GetCharacterResult } from '../4.Data/QueryLayer/3.Results/Character/GetCharacterResult';

export class Character extends ModelBase<number> {
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

    constructor(id: number, queryContainer: QueryContainer, result?: IResult) {
        super(id, queryContainer, result);

        console.log('in domain');
        if (result === null || result === undefined) {
            let query = new GetCharacterQuery();
            query.CharacterID = id;
            let result = queryContainer.ExecuteQuery<GetCharacterQuery, GetCharacterResult>(query);

            if (result !== undefined) {
                this.AssignResult(result);
            }
        }
    }
}