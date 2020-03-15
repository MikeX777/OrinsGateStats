import { ModelBase } from '../../../Infrastructure/BaseClasses/ModelBase';
import { CommandContainer } from '../../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../../Infrastructure/DependancyInversion/QueryContainer';
import { IResult } from '../../../Infrastructure/Interfaces/IResult';
import { CampaignDashboardDto } from '../../2.Services/DtoModels/Campaign/CampaignDashboardDto/CampaignDashboardDto';
import { CharacterDto } from '../../2.Services/DtoModels/Campaign/CampaignDashboardDto/CharacterDto';
import { GetCampaignDomainQuery } from '../../4.Data/QueryLayer/1.Queries/Campaign/GetCampaignDomainQuery';
import { GetCampaignDomainResult } from '../../4.Data/QueryLayer/3.Results/Campaign/GetCampaignDomainResult';
import { StatType } from './SubObjects/StatType';
import { Sub_Bonus } from './SubObjects/Sub_Bonus';
import { Sub_Character } from './SubObjects/Sub_Character';
import { Sub_Feat } from './SubObjects/Sub_Feats';
import { Sub_Language } from './SubObjects/Sub_Language';
import { Sub_Player } from './SubObjects/Sub_Player';
import { Sub_Power } from './SubObjects/Sub_Power';
import { Sub_Request } from './SubObjects/Sub_Request';
import { Sub_Trick } from './SubObjects/Sub_Trick';

export class Campaign extends ModelBase<number> {

    public ID: number;
    public Name: string;

    private dungeonMaster: Sub_Player;
    public get DungeonMaster(): Sub_Player {
        return this.dungeonMaster;
    }
    public set DungeonMaster(v: Sub_Player) {
        this.dungeonMaster = v;
    }

    private requests: Sub_Request[];
    public get Request(): Sub_Request[] {
        return this.requests;
    }
    public set Request(v: Sub_Request[]) {
        this.requests = v;
    }

    private characters: Sub_Character[];
    public get Characters(): Sub_Character[] {
        return this.characters;
    }
    public set Characters(v: Sub_Character[]) {
        this.characters = v;
    }

    constructor(id: number, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        super(id, queryContainer, commandContainer, result);
    }

    public async BuildCampaignDashboard(): Promise<CampaignDashboardDto> {
        const dashboard: CampaignDashboardDto = {
            ID: this.ID,
            Name: this.Name,
            DungeonMasterPlayerID: this.dungeonMaster.ID,
            DungeonMasterFirstName: this.dungeonMaster.FirstName,
            DungeonMasterLastName: this.dungeonMaster.LastName,
            Characters: this.characters.map((character) => {
                const characterDto: CharacterDto = {
                    ID: character.ID,
                    Name: character.Name,
                    Conscious: character.Conscious,
                    Alive: character.Alive,
                    Stable: character.Stable,
                    MaxHealth: character.MaxHealth,
                    CurrentHealth: character.CurrentHealth,
                    RaceName: character.Race.Name,
                    CharacterClassName: character.CharacterClass.Name,
                    PlayerID: character.PlayerID,
                    Languages: character.Languages.map((language) => language.Name),
                    LanguageIDs: character.Languages.map((language) => language.ID),
                    Feats: character.Feats.map((feat) => feat.Name),
                    FeatIDs: character.Feats.map((feat) => feat.ID),
                    Tricks: character.Tricks.map((trick) => trick.Name),
                    TrickIDs: character.Tricks.map((trick) => trick.ID),
                    Powers: character.Powers.map((power) => power.Name),
                    PowerIDs: character.Powers.map((power) => power.ID),
                };

                return characterDto;
            }),
        };

        return dashboard;
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            const result = await this.queryContainer.ExecuteQuery<GetCampaignDomainQuery, GetCampaignDomainResult>(
                new GetCampaignDomainQuery(this.ID),
            );

            if (result !== undefined) {
                this.MapResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
    }

    private MapResult(result: GetCampaignDomainResult): void {
        this.ID = result.ID;
        this.Name = result.Name;

        this.dungeonMaster = {
            ID: result.DungeonMaster.ID,
            FirstName: result.DungeonMaster.FirstName,
            LastName: result.DungeonMaster.LastName,
            Username: result.DungeonMaster.Username,
            Email: result.DungeonMaster.Email,
            Password: result.DungeonMaster.Password,
        };

        this.requests = result.Requests.map((request) => {
            return {
                ID: request.ID,
                CharacterID: request.CharacterID,
            };
        });

        this.characters = result.Characters.map((character) => {
            const mappedCharacter: Sub_Character = {
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
                Speed: character.Speed,
                Copper: character.Copper,
                Silver: character.Silver,
                Gold: character.Gold,
                Platinum: character.Platinum,
                MaxHitDice: character.MaxHitDice,
                CurrentHitDice: character.CurrentHitDice,
                Exhaustion: character.Exhaustion,
                Race: {
                    ID: character.Race.ID,
                    Name: character.Race.Name,
                },
                CharacterClass: {
                    ID: character.CharacterClass.ID,
                    Name: character.CharacterClass.Name,
                },
                PlayerID: character.PlayerID,
                ArmorID: character.ArmorID,
                ShieldID: character.ShieldID,
                Languages: character.Languages.map((characterLanguage) => {
                    const language: Sub_Language = {
                        ID: characterLanguage.Language.ID,
                        Name: characterLanguage.Language.Name,
                    };
                    return language;
                }),
                Feats: character.Feats.map((characterFeats) => {
                    const feat: Sub_Feat = {
                        ID: characterFeats.Feat.ID,
                        Name: characterFeats.Feat.Name,
                        Text: characterFeats.Feat.Text,
                        Bonuses: characterFeats.Feat.FeatBonuses.map((featBonus) => {
                            const bonus: Sub_Bonus = {
                                ID: featBonus.ID,
                                StatType: StatType[featBonus.StatType.Type],
                                Modifier: featBonus.Bonus,
                            };
                            return bonus;
                        }),
                    };
                    return feat;
                }),
                Tricks: character.Tricks.map((characterTrick) => {
                    const trick: Sub_Trick = {
                        ID: characterTrick.Trick.ID,
                        Name: characterTrick.Trick.Name,
                    };
                    return trick;
                }),
                Powers: character.Powers.map((characterPower) => {
                    const power: Sub_Power = {
                        ID: characterPower.Power.ID,
                        Name: characterPower.Power.Name,
                        Level: characterPower.Power.Level,
                    };
                    return power;
                }),
            };
            return mappedCharacter;
        });

    }
}
