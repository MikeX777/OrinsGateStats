import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetRaceResult } from '../../3.Results/Race/GetRaceResult/GetRaceResult';
import { createQueryBuilder } from 'typeorm';
import { TBRace } from '../../../../5.Entities/TBRace';
import { GetRaceBonusResult } from '../../3.Results/Race/GetRaceResult/GetRaceBonusResult';
import { GetAllRacesQuery } from '../../1.Queries/Race/GetAllRacesQuery';

export class GetAllRacesQueryHandler extends QueryHandlerBase<GetAllRacesQuery, GetRaceResult[]> {

    public async Execute(query: GetAllRacesQuery): Promise<GetRaceResult[]> {
        const raceTableData = await createQueryBuilder<TBRace>('TBRace')
            .leftJoinAndSelect('TBRace.RaceBonuses', 'RaceBonuses')
                .leftJoinAndSelect('RaceBonuses.Bonus', 'Bonus')
                .leftJoinAndSelect('RaceBonuses.StatType', 'StatType')
            .getMany()
        const results: GetRaceResult[] = raceTableData.map((r) => {
            const race: GetRaceResult = {
                ID: r.ID,
                Name: r.Name,
                RaceBonuses: r.RaceBonuses.map((rb) => {
                    const bonus: GetRaceBonusResult = {
                        Bonus: rb.Bonus.Modifier,
                        StatType: rb.StatType.Type
                    };
                    return bonus;
                })
            }
            return race;
        });
        return results;
    }
}