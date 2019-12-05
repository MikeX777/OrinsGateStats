import { ModelBase } from '../../../Infrastructure/BaseClasses/ModelBase';
import { QueryContainer } from '../../../Infrastructure/DependancyInversion/QueryContainer';
import { CommandContainer } from '../../../Infrastructure/DependancyInversion/CommandContainer';
import { IResult } from '../../../Infrastructure/Interfaces/IResult';
import { Sub_Character } from './SubObjects/Sub_Character';
import { GetPlayerDomainResult } from '../../4.Data/QueryLayer/3.Results/Player/GetPlayerDomainResult';
import { GetPlayerDomainQuery } from '../../4.Data/QueryLayer/1.Queries/Player/GetPlayerDomainQuery';
import { CreateCharacterCommand } from '../../4.Data/ComandLayer/1.Commands/Character/CreateCharacterCommand';
import { CreateCharacterRequest } from '../../1.Controllers/Requests/Player/CreateCharacterRequest';
import { TBCharacter } from '../../5.Entities/TBCharacter';

export class Player extends ModelBase<number> {

    ID: number;
    Username: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;

    constructor(id: number, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        super(id, queryContainer, commandContainer, result);
    }

    public async CreateCharacter(request: CreateCharacterRequest): Promise<any> {
        let createCharacterCommand = new CreateCharacterCommand(
            request.CharacterName,
            request.Conscious,
            request.Alive,
            request.Stable,
            request.MaxHealth,
            request.CurrentHealth,
            request.Strength,
            request.Dexterity,
            request.Constitution,
            request.Intelligence,
            request.Wisdom,
            request.Charisma,
            request.ProficiencyBonus,
            request.Speed,
            request.Copper,
            request.Silver,
            request.Gold,
            request.MaxHitDice,
            request.CurrentHitDice,
            request.Exhaustion,
            request.RaceID,
            request.CharacterClassID,
            request.CampaignID,
            request.PlayerID,
            request.ArmorID,
            request.ShieldID,
            request.LanguageIDs,
            request.FeatIDs,
            request.TrickIDs,
            request.PowerIDs
        )
        let characterResult = <TBCharacter>await this.commandContainer.ExecuteCommand(createCharacterCommand);

        return {
            ID: characterResult.ID,
            CharacterName: characterResult.Name,
            Conscious: characterResult.Conscious,
            Alive: characterResult.Alive,
            Stable: characterResult.Stable,
            MaxHealth: characterResult.MaxHealth,
            CurrentHealth: characterResult.CurrentHealth,
            Strength: characterResult.Strength,
            Dexterity: characterResult.Dexterity,
            Constitution: characterResult.Constitution,
            Intelligence: characterResult.Intelligence,
            Wisdom: characterResult.Wisdom,
            Charisma: characterResult.Charisma,
            ProficiencyBonus: characterResult.ProficiencyBonus,
            Speed: characterResult.Speed,
            Copper: characterResult.Copper,
            Silver: characterResult.Silver,
            Gold: characterResult.Gold,
            MaxHitDice: characterResult.MaxHitDice,
            CurrentHitDice: characterResult.CurrentHitDice,
            Exhaustsion: characterResult.Exhaustion,
            RaceID: characterResult.RaceID,
            CharacterClassID: characterResult.CharacterClassID,
            CampaignID: characterResult.CampaignID,
            PlayerID: characterResult.PlayerID,
            ArmorID: characterResult.ArmorID,
            ShieldID: characterResult.ShieldID
        };
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            let result = await this.queryContainer.ExecuteQuery<GetPlayerDomainQuery, GetPlayerDomainResult>(
                new GetPlayerDomainQuery(this.ID)
            );

            if (result !== undefined) {
                this.MapResult(result);
                this.retrieved;
            }
        }
        return this.retrieved;
    }

    
    private _Characters : Sub_Character[];
    public get Characters() : Sub_Character[] {
        return this._Characters;
    }
    public set Characters(v : Sub_Character[]) {
        this._Characters = v;
    }

    private MapResult(result: GetPlayerDomainResult): void {
        this.ID = result.ID;
        this.Username = result.Username;
        this.Password = result.Password;
        this.Email = result.Email;
        this.FirstName = result.FirstName;
        this.LastName = result.LastName;

        this._Characters = result.Characters.map(c => {
            return {
                ID: c.ID,
                Name: c.Name,
                Conscious: c.Conscious,
                Alive: c.Alive,
                Stable: c.Stable,
                MaxHealth: c.MaxHealth,
                CurrentHealth: c.CurrentHealth,
                Strength: c.Strength,
                Dexterity: c.Dexterity,
                Constitution: c.Constitution,
                Intelligence: c.Intelligence,
                Wisdom: c.Wisdom,
                Charisma: c.Charisma,
                ProficiencyBonus: c.ProficiencyBonus,
                Speed: c.Speed,
                Copper: c.Copper,
                Silver: c.Silver,
                Gold: c.Gold,
                MaxHitDice: c.MaxHitDice,
                CurrentHitDice: c.CurrentHitDice,
                Exhaustsion: c.Exhaustion,
                RaceID: c.RaceID,
                CharacterClassID: c.CharacterClassID,
                CampaignID: c.CampaignID,
                PlayerID: c.PlayerID,
                ArmorID: c.ArmorID,
                ShieldID: c.ShieldID,
                LanguageIDs: c.LanguageIDs,
                FeatIDs: c.FeatIDs,
                TrickIDs: c.TrickIDs,
                PowerIDs: c.PowerIDs
            };
        });
    }
    
}
