import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';

export class GetStatTypeResult implements IResult {
    public ID: number;
    public Type: string;
}
