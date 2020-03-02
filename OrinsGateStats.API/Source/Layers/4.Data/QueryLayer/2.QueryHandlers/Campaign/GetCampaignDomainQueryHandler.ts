import { createQueryBuilder } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetCampaignDomainQuery } from '../../1.Queries/Campaign/GetCampaignDomainQuery';
import { GetCampaignDomainResult } from '../../3.Results/Campaign/GetCampaignDomainResult';

export class GetCampaignDomainQueryHandler extends QueryHandlerBase<GetCampaignDomainQuery, GetCampaignDomainResult> {

    public async Execute(query: GetCampaignDomainQuery): Promise<GetCampaignDomainResult> {
        return await createQueryBuilder<GetCampaignDomainResult>('TBCampaign')
            .leftJoinAndSelect('TBCampaign.Characters', 'Characters')
                .leftJoinAndSelect('TBCharacter.CharacterFeats', 'CharacterFeats')
                    .leftJoinAndSelect('CharacterFeats.Feat', 'Feat')
                        .leftJoinAndSelect('Feat.FeatBonuses', 'FeatBonuses')
                            .leftJoinAndSelect('FeatBonuses.StatType', 'StatType')
                .leftJoinAndSelect('TBCharacter.CharacterLanguages', 'CharacterLanguages')
                    .leftJoinAndSelect('CharacterLanguages.Language', 'Language')
                .leftJoinAndSelect('TBCharacter.CharacterPowers', 'CharacterPowers')
                    .leftJoinAndSelect('CharacterPowers.Power', 'Power')
                .leftJoinAndSelect('TBCharacter.CharacterTricks', 'CharacterTricks')
                    .leftJoinAndSelect('CharacterTricks.Trick', 'Trick')
            .leftJoinAndSelect('TBCampaign.RequestedCharacters', 'Requests')
            .leftJoinAndSelect('TBCampaign.DungeonMaster', 'DungeonMaster')
            .where('TBCampaign.ID = :CampaignID', { CampaignID: query.CampaignID })
            .getOne();
    }
}
