import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetPlayerDomainQuery } from '../../1.Queries/Player/GetPlayerDomainQuery';
import { GetPlayerDomainResult } from '../../3.Results/Player/GetPlayerDomainResult';
import { createQueryBuilder } from 'typeorm';

export class GetPlayerDomainQueryHandler extends QueryHandlerBase<GetPlayerDomainQuery, GetPlayerDomainResult> {

    public async Execute(query: GetPlayerDomainQuery): Promise<GetPlayerDomainResult> {
        return await createQueryBuilder<GetPlayerDomainResult>('TBPlayer')
            .leftJoinAndSelect('TBPlayer.Characters', 'Characters')
            .where('TBPlayer.ID = :PlayerID', { PlayerID: query.PlayerID })
            .getOne();
    }
}
