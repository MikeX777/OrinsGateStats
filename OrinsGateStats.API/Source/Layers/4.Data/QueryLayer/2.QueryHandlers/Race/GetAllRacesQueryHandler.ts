import { createQueryBuilder } from 'typeorm';
import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { TBRace } from '../../../../5.Entities/TBRace';
import { GetAllRacesQuery } from '../../1.Queries/Race/GetAllRacesQuery';
import { GetRaceBonusResult } from '../../3.Results/Race/GetRaceResult/GetRaceBonusResult';
import { GetRaceResult } from '../../3.Results/Race/GetRaceResult/GetRaceResult';

export class GetAllRacesQueryHandler extends QueryHandlerBase<GetAllRacesQuery, GetRaceResult[]> {

    public async Execute(query: GetAllRacesQuery): Promise<GetRaceResult[]> {
        const raceTableData = await createQueryBuilder<TBRace>('TBRace')
            .leftJoinAndSelect('TBRace.RaceBonuses', 'RaceBonuses')
                .leftJoinAndSelect('RaceBonuses.StatType', 'StatType')
            .getMany();
        const results: GetRaceResult[] = raceTableData.map((r) => {
            const race: GetRaceResult = {
                ID: r.ID,
                Name: r.Name,
                RaceBonuses: r.RaceBonuses.map((rb) => {
                    const bonus: GetRaceBonusResult = {
                        Bonus: rb.Bonus,
                        StatType: rb.StatType.Type,
                    };
                    return bonus;
                }),
            };
            return race;
        });
        return results;
    }
}
