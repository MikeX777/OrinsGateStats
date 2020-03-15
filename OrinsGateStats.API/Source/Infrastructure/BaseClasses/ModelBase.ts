import { IResult } from '../Interfaces/IResult';
import { QueryContainer } from '../DependancyInversion/QueryContainer';
import { CommandContainer } from '../DependancyInversion/CommandContainer';

export abstract class ModelBase<TIdentifier> {
    ID: TIdentifier;
    protected retrieved: boolean = false;
    protected queryContainer: QueryContainer;
    protected commandContainer: CommandContainer;

    constructor(id: TIdentifier, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        this.ID = id;
        this.queryContainer = queryContainer;
        this.commandContainer = commandContainer;

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