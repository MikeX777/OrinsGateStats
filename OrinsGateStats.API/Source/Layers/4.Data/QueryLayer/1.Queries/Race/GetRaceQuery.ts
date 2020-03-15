import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetRaceQuery implements IQuery {
    Key: string = 'GetRaceQuery';
    RaceID: number;

    constructor(raceID: number) {
        this.RaceID = raceID;
    }
}