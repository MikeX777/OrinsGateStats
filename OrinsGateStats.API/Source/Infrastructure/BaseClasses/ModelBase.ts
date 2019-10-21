import { IResult } from '../Interfaces/IResult';
import { QueryContainer } from '../DependancyInversion/QueryContainer';

export abstract class ModelBase<TIdentifier> {
    ID: TIdentifier;
    protected retrieved: boolean = false;
    protected queryContainer: QueryContainer;

    constructor(id: TIdentifier, queryContainer: QueryContainer, result?: IResult) {
        this.ID = id;
        this.queryContainer = queryContainer;

        if (result !== null && result !== undefined) {
            this.AssignResult(result);
            this.retrieved = true;
        }

    }

    protected AssignResult(result: IResult) {
        Object.assign<this, IResult>(this, result);
    }

    public async Retrieve(): Promise<boolean> {
        return this.retrieved;
    }
}