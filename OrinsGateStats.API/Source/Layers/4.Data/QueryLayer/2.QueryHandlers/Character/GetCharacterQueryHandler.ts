import { QueryHandlerBase } from "../../../../../Infrastructure/BaseClasses/QueryHandlerBase";
import { GetCharacterQuery } from "../../1.Queries/Character/GetCharacterQuery";
import { GetCharacterResult } from "../../3.Results/Character/GetCharacterResult";
import { getRepository } from "typeorm";
import { TBCharacter } from "../../../../5.Entities/TBCharacter";


export class GetCharacterQueryHandler extends QueryHandlerBase<GetCharacterQuery, GetCharacterResult> {

    public async Execute(query: GetCharacterQuery): Promise<GetCharacterResult> {
        var characterRepository = getRepository(TBCharacter);
        var character = await characterRepository.findOne(query.CharacterID);
        var result: GetCharacterResult = {
            ID: character.ID,
            Name: character.Name,
            Conscious: character.Conscious,
            Alive: character.Alive,
            MaxHealth: character.MaxHealth,
            CurrentHealth: character.CurrentHealth,
            ArmorClass: character.ArmorClass,
            Strength: character.Strength,
            Dexterity: character.Dexterity,
            Constitution: character.Constitution,
            Intelligence: character.Intelligence,
            Wisdom: character.Wisdom,
            Charisma: character.Charisma,
            ProficiencyBonus: character.ProficiencyBonus,
            Speed: character.Speed,
            Copper: character.Copper,
            Silver: character.Silver,
            Gold: character.Silver,
            MaxHitDice: character.MaxHitDice,
            CurrentHitDice: character.CurrentHitDice,
            RaceID: character.RaceID,
            CharacterClassID: character.CharacterClassID,
            CampaignID: character.CampaignID,
            PlayerID: character.PlayerID
        };
        return result;
    }
}