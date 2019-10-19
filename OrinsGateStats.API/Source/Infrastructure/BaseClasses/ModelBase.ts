import { IResult } from "../Interfaces/IResult";

export abstract class ModelBase<TIdentifier> {
    ID: TIdentifier;

    constructor(id: TIdentifier, result?: IResult) {
        this.ID = id;

        if (result !== null) {
            this.AssignResult(result);
        }

    }

    private AssignResult(result: IResult) {
        Object.assign<this, IResult>(this, result);
    }
}