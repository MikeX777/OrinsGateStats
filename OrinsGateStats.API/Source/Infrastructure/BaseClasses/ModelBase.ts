import { IResult } from '../Interfaces/IResult';
import { QueryContainer } from '../DependancyInversion/QueryContainer';

export abstract class ModelBase<TIdentifier> {
    ID: TIdentifier;

    constructor(id: TIdentifier, queryContainer: QueryContainer, result?: IResult) {
        this.ID = id;

        if (result !== null) {
            this.AssignResult(result);
        }

    }

    protected AssignResult(result: IResult) {
        Object.assign<this, IResult>(this, result);
    }
}