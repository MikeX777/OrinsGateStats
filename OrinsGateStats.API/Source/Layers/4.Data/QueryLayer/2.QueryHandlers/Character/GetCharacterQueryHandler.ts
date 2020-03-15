import { getRepository } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { TBCharacter } from '../../../../5.Entities/TBCharacter';
import { GetCharacterQuery } from '../../1.Queries/Character/GetCharacterQuery';
import { GetCharacterResult } from '../../3.Results/Character/GetCharacterResult';

export class GetCharacterQueryHandler extends QueryHandlerBase<GetCharacterQuery, GetCharacterResult> {

    public async Execute(query: GetCharacterQuery): Promise<GetCharacterResult> {
        const characterRepository = getRepository(TBCharacter);
        const character = await characterRepository.findOne(query.CharacterID);
        const result: GetCharacterResult = {
            ID: character.ID,
            Name: character.Name,
            Conscious: character.Conscious,
            Alive: character.Alive,
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
            Gold: character.Silver,
            Platinum: character.Platinum,
            MaxHitDice: character.MaxHitDice,
            CurrentHitDice: character.CurrentHitDice,
            Exhaustion: character.Exhaustion,
            RaceID: character.RaceID,
            CharacterClassID: character.CharacterClassID,
            CampaignID: character.CampaignID,
            PlayerID: character.PlayerID,
            ArmorID: character.ArmorID,
            ShieldID: character.ShieldID,
        };
        return result;
    }
}
