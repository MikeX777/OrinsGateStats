import { getRepository } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { TBStatType } from '../../../../5.Entities/TBStatType';
import { GetAllStatTypesQuery } from '../../1.Queries/Character/GetAllStatTypesQuery';
import { GetStatTypeResult } from '../../3.Results/Character/GetStatTypeResult';

export class GetAllStatTypesQueryHandler extends QueryHandlerBase<GetAllStatTypesQuery, GetStatTypeResult[]> {

    public async Execute(query: GetAllStatTypesQuery): Promise<GetStatTypeResult[]> {
        const statTypeRepository = getRepository(TBStatType);

        const statTypes = await statTypeRepository.find();
        const results = statTypes.map((st) => {
            const result: GetStatTypeResult = {
                ID: st.ID,
                Type: st.Type,
            };
            return result;
        });
        return results;
    }
}
