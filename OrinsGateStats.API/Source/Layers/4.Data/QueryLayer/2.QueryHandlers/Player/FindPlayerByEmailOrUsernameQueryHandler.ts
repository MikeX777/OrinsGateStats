import { getRepository } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { TBPlayer } from '../../../../5.Entities/TBPlayer';
import { FindPlayerByEmailOrUsernameQuery } from '../../1.Queries/Player/FindPlayerByEmailOrUsernameQuery';
import { FindPlayerByEmailOrUsernameResult } from '../../3.Results/Player/FindPlayerByEmailOrUsernameResult';

export class FindPlayerByEmailOrUsernameQueryHandler extends
    QueryHandlerBase<FindPlayerByEmailOrUsernameQuery, FindPlayerByEmailOrUsernameResult> {

    public async Execute(query: FindPlayerByEmailOrUsernameQuery): Promise<FindPlayerByEmailOrUsernameResult> {
        const playerRepository = getRepository(TBPlayer);

        return await playerRepository.findOne({
            where: [
                {
                    Username: query.EmailOrUsername,
                },
                {
                    Email: query.EmailOrUsername,
                },
            ],
        });
    }
}
