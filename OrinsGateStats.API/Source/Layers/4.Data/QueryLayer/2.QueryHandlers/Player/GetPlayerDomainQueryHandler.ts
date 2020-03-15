import { createQueryBuilder } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetPlayerDomainQuery } from '../../1.Queries/Player/GetPlayerDomainQuery';
import { GetPlayerDomainResult } from '../../3.Results/Player/GetPlayerDomainResult';

export class GetPlayerDomainQueryHandler extends QueryHandlerBase<GetPlayerDomainQuery, GetPlayerDomainResult> {

    public async Execute(query: GetPlayerDomainQuery): Promise<GetPlayerDomainResult> {
        return await createQueryBuilder<GetPlayerDomainResult>('TBPlayer')
            .leftJoinAndSelect('TBPlayer.Characters', 'Characters')
                .leftJoinAndSelect('Characters.Campaign', 'Campaign')
                .leftJoinAndSelect('Characters.Race', 'Race')
                .leftJoinAndSelect('Characters.CharacterClass', 'CharacterClass')
            .leftJoinAndSelect('TBPlayer.OwnedCampaigns', 'OwnedCampaigns')
            .where('TBPlayer.ID = :PlayerID', { PlayerID: query.PlayerID })
            .getOne();
    }
}
