import { IResult } from "../Interfaces/IResult";
import { IQuery } from "../Interfaces/IQuery";

export abstract class QueryHandlerBase<TQuery extends IQuery, TResult extends IResult> {
    public abstract async Execute(query: TQuery) : Promise<TResult>;
}