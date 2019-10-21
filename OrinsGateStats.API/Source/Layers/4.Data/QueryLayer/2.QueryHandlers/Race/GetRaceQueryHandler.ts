import { QueryHandlerBase } from "../../../../../Infrastructure/BaseClasses/QueryHandlerBase";
import { GetRaceQuery } from "../../1.Queries/Race/GetRaceQuery";
import { GetRaceResult } from "../../3.Results/Race/GetRaceResult";
import { getRepository } from "typeorm";
import { TBRace } from "../../../../5.Entities/TBRace";

export class GetRaceQueryHandler extends QueryHandlerBase<GetRaceQuery, GetRaceResult> {

    public async Execute(query: GetRaceQuery): Promise<GetRaceResult> {
        console.log('here I am');
        let raceRepository = getRepository(TBRace);
        let race = await raceRepository.findOne(query.RaceID);
        let result: GetRaceResult = {
            ID: race.ID,
            Name: race.Name
        };
        return result;
    }
}