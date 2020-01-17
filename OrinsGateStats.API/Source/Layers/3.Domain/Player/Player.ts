import { ModelBase } from '../../../Infrastructure/BaseClasses/ModelBase';
import { CommandContainer } from '../../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../../Infrastructure/DependancyInversion/QueryContainer';
import { IResult } from '../../../Infrastructure/Interfaces/IResult';
import { CreateCharacterRequest } from '../../1.Controllers/Requests/Player/CreateCharacterRequest';
import { PlayerDashboardDto } from '../../2.Services/DtoModels/Player/PlayerDashboardDto';
import { PlayerDashboardCharacterDto } from '../../2.Services/DtoModels/Player/SubObjects/PlayerDashboardCharacterDto';
import { CreateCharacterCommand } from '../../4.Data/ComandLayer/1.Commands/Character/CreateCharacterCommand';
import { GetPlayerDomainQuery } from '../../4.Data/QueryLayer/1.Queries/Player/GetPlayerDomainQuery';
import { GetPlayerDomainResult } from '../../4.Data/QueryLayer/3.Results/Player/GetPlayerDomainResult';
import { TBCharacter } from '../../5.Entities/TBCharacter';
import { Sub_Campaign } from './SubObjects/Sub_Campaign';
import { Sub_Character } from './SubObjects/Sub_Character';

export class Player extends ModelBase<number> {

    public ID: number;
    public Username: string;
    public Password: string;
    public Email: string;
    public FirstName: string;
    public LastName: string;

    private characters: Sub_Character[];
    public get Characters(): Sub_Character[] {
        return this.characters;
    }
    public set Characters(v: Sub_Character[]) {
        this.characters = v;
    }

    private ownedCampaigns: Sub_Campaign[];
    public get OwnedCampaigns(): Sub_Campaign[] {
        return this.ownedCampaigns;
    }
    public set OwnedCampaigns(v: Sub_Campaign[]) {
        this.ownedCampaigns = v;
    }

    constructor(id: number, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        super(id, queryContainer, commandContainer, result);
    }

    public async CreateCharacter(request: CreateCharacterRequest): Promise<any> {
        const createCharacterCommand = new CreateCharacterCommand(
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
            request.Speed,
            request.Copper,
            request.Silver,
            request.Gold,
            request.Platinum,
            request.MaxHitDice,
            request.CurrentHitDice,
            request.Exhaustion,
            request.RaceID,
            request.CharacterClassID,
            request.PlayerID,
            request.ArmorID,
            request.ShieldID,
            request.LanguageIDs,
            request.FeatIDs,
            request.TrickIDs,
            request.PowerIDs,
        );

        const characterResult = await this.commandContainer.ExecuteCommand(createCharacterCommand) as TBCharacter;

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
            Speed: characterResult.Speed,
            Copper: characterResult.Copper,
            Silver: characterResult.Silver,
            Gold: characterResult.Gold,
            Platinum: characterResult.Platinum,
            MaxHitDice: characterResult.MaxHitDice,
            CurrentHitDice: characterResult.CurrentHitDice,
            Exhaustsion: characterResult.Exhaustion,
            RaceID: characterResult.RaceID,
            CharacterClassID: characterResult.CharacterClassID,
            CampaignID: characterResult.CampaignID,
            PlayerID: characterResult.PlayerID,
            ArmorID: characterResult.ArmorID,
            ShieldID: characterResult.ShieldID,
        };
    }

    public async BuildPlayerDashboard(): Promise<PlayerDashboardDto> {
        const dto: PlayerDashboardDto = {
            ID: this.ID,
            FirstName: this.FirstName,
            LastName: this.LastName,
            Characters: this.Characters.map((character) => {
                const characterDto: PlayerDashboardCharacterDto = {
                    ID: character.ID,
                    Name: character.Name,
                    Conscious: character.Conscious,
                    Alive: character.Alive,
                    Stable: character.Stable,
                    MaxHealth: character.MaxHealth,
                    CurrentHealth: character.CurrentHealth,
                    Strength: character.Strength,
                    Dexterity: character.Dexterity,
                    Constitution: character.Constitution,
                    Intelligence: character.Intelligence,
                    Wisdom: character.Wisdom,
                    Charisma: character.Charisma,
                    ProficiencyBonus: 2 + Math.floor(character.MaxHitDice / 4),
                    Speed: character.Speed,
                    Copper: character.Copper,
                    Silver: character.Silver,
                    Gold: character.Gold,
                    Platinum: character.Platinum,
                    MaxHitDice: character.MaxHitDice,
                    CurrentHitDice: character.CurrentHitDice,
                    Exhaustsion: character.Exhaustsion,
                    RaceName: character.Race.Name,
                    CharacterClassName: character.CharacterClass.Name,
                    CampaignName: character.Campaign.Name,
                };
                return characterDto;
            }),
        };
        return dto;
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            const result = await this.queryContainer.ExecuteQuery<GetPlayerDomainQuery, GetPlayerDomainResult>(
                new GetPlayerDomainQuery(this.ID),
            );

            if (result !== undefined) {
                this.MapResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
    }

    private MapResult(result: GetPlayerDomainResult): void {
        this.ID = result.ID;
        this.Username = result.Username;
        this.Password = result.Password;
        this.Email = result.Email;
        this.FirstName = result.FirstName;
        this.LastName = result.LastName;

        this.characters = result.Characters.map((c) => {
            const character: Sub_Character = {
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
                Speed: c.Speed,
                Copper: c.Copper,
                Silver: c.Silver,
                Gold: c.Gold,
                Platinum: c.Platinum,
                MaxHitDice: c.MaxHitDice,
                CurrentHitDice: c.CurrentHitDice,
                Exhaustsion: c.Exhaustion,
                Race: {
                    ID: c.Race?.ID,
                    Name: c.Race?.Name,
                },
                CharacterClass: {
                    ID: c.CharacterClass?.ID,
                    Name: c.CharacterClass?.Name,
                    HitDieID: c.CharacterClass?.HitDieID,
                },
                Campaign: {
                    ID: c.Campaign?.ID,
                    Name: c.Campaign?.Name,
                    DungeonMasterID: c.Campaign?.DungeonMasterID,
                },
                PlayerID: c.PlayerID,
                ArmorID: c.ArmorID,
                ShieldID: c.ShieldID,
                LanguageIDs: c.LanguageIDs,
                FeatIDs: c.FeatIDs,
                TrickIDs: c.TrickIDs,
                PowerIDs: c.PowerIDs,
            };
            return character;
        });

        this.ownedCampaigns = result.OwnedCampaigns.map((oc) => {
            const ownedCampaign: Sub_Campaign = {
                ID: oc.ID,
                Name: oc.Name,
                DungeonMasterID: oc.DungeonMasterID,
            };
            return ownedCampaign;
        });
    }
}
