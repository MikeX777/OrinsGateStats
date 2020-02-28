import { IResult } from '../../../../../../Infrastructure/Interfaces/IResult';
import { GetRaceBonusResult } from './GetRaceBonusResult';

export class GetRaceResult implements IResult {
    public ID: number;
    public Name: string;
    public RaceBonuses: GetRaceBonusResult[];
}