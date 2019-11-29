import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { FindPlayerByEmailOrUsernameQuery } from '../../1.Queries/Player/FindPlayerByEmailOrUsernameQuery';
import { FindPlayerByEmailOrUsernameResult } from '../../3.Results/Player/FindPlayerByEmailOrUsernameResult';
import { getRepository } from 'typeorm';
import { TBPlayer } from '../../../../5.Entities/TBPlayer';

export class FindPlayerByEmailOrUsernameQueryHandler extends QueryHandlerBase<FindPlayerByEmailOrUsernameQuery, FindPlayerByEmailOrUsernameResult> {
    
    public async Execute(query: FindPlayerByEmailOrUsernameQuery): Promise<FindPlayerByEmailOrUsernameResult> {
        let playerRepository = getRepository(TBPlayer);
        
        return await playerRepository.findOne({
            where: [
                {
                    Username: query.EmailOrUsername
                },
                {
                    Email: query.EmailOrUsername
                }
            ]
        });
    }
}