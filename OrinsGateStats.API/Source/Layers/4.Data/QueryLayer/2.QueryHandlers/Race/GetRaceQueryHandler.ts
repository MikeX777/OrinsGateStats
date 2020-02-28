import { QueryHandlerBase } from '../../../../../Infrastructure/BaseClasses/QueryHandlerBase';
import { GetRaceQuery } from '../../1.Queries/Race/GetRaceQuery';
import { GetRaceResult } from '../../3.Results/Race/GetRaceResult/GetRaceResult';
import { createQueryBuilder } from 'typeorm';
import { TBRace } from '../../../../5.Entities/TBRace';
import { GetRaceBonusResult } from '../../3.Results/Race/GetRaceResult/GetRaceBonusResult';

export class GetRaceQueryHandler extends QueryHandlerBase<GetRaceQuery, GetRaceResult> {

    public async Execute(query: GetRaceQuery): Promise<GetRaceResult> {
        const raceTableData = await createQueryBuilder<TBRace>('TBRace')
            .leftJoinAndSelect('TBRace.RaceBonuses', 'RaceBonuses')
                .leftJoinAndSelect('RaceBonuses.Bonus', 'Bonus')
                .leftJoinAndSelect('RaceBonuses.StatType', 'StatType')
            .where('TBRace.ID = :RaceID', {RaceID: query.RaceID})
            .getOne();
        const result: GetRaceResult = {
            ID: raceTableData.ID,
            Name: raceTableData.Name,
            RaceBonuses: raceTableData.RaceBonuses.map((rb) => {
                const bonus: GetRaceBonusResult = {
                    Bonus: rb.Bonus.Modifier,
                    StatType: rb.StatType.Type
                };
                return bonus;
            })
        };
        return result;
    }
}