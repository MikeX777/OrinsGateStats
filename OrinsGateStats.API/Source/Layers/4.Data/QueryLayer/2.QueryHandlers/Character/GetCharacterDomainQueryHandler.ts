import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetCharacterDomainQuery } from '../../1.Queries/Character/GetCharacterDomainQuery';
import { GetCharacterDomainResult } from '../../3.Results/Character/GetCharacterDomainResult';
import { createQueryBuilder } from 'typeorm';

export class GetCharacterDomainQueryHandler extends QueryHandlerBase<GetCharacterDomainQuery, GetCharacterDomainResult> {

    public async Execute(query: GetCharacterDomainQuery): Promise<GetCharacterDomainResult | any> {
        const character = await createQueryBuilder<GetCharacterDomainResult>('TBCharacter')
            .leftJoinAndSelect('TBCharacter.Armor', 'Armor')
            .leftJoinAndSelect('TBCharacter.Campaign', 'Campaign')
            .leftJoinAndSelect('TBCharacter.CharacterClass', 'CharacterClass')
            .leftJoinAndSelect('TBCharacter.Player', 'Player')
            .leftJoinAndSelect('TBCharacter.Race', 'Race')
            .leftJoinAndSelect('TBCharacter.Shield', 'Shield')
                .leftJoinAndSelect('CharacterClass.HitDie', 'HitDie')
            .leftJoinAndSelect('TBCharacter.CharacterFeats', 'CharacterFeats')
                .leftJoinAndSelect('CharacterFeats.Feat', 'Feat')
                    .leftJoinAndSelect('Feat.FeatBonuses', 'FeatBonuses')
                        .leftJoinAndSelect('FeatBonuses.Bonus', 'Bonus')
                        .leftJoinAndSelect('FeatBonuses.StatType', 'StatType')
            .leftJoinAndSelect('TBCharacter.CharacterLanguages', 'CharacterLanguages')
                .leftJoinAndSelect('CharacterLanguages.Language', 'Language')
            .leftJoinAndSelect('TBCharacter.CharacterPowers', 'CharacterPowers')
                .leftJoinAndSelect('CharacterPowers.Power', 'Power')
            .leftJoinAndSelect('TBCharacter.CharacterTricks', 'CharacterTricks')
                .leftJoinAndSelect('CharacterTricks.Trick', 'Trick')
            .where('TBCharacter.ID = :CharacterID', { CharacterID: query.CharacterID})
            .getOne();

        return character;
    }
}