import { IQuery } from '../../Infrastructure/Interfaces/IQuery';
import { Dictionary } from '../../Utilities/Dictionary';
import { IResult } from '../../Infrastructure/Interfaces/IResult';
import { QueryHandlerBase } from '../../Infrastructure/BaseClasses/QueryHandlerBase';

export class QueryContainer {

    private containerDictionary: Dictionary<string, QueryHandlerBase<IQuery, IResult>> =
        new Dictionary<string, QueryHandlerBase<IQuery, IResult>>();

    public Register(queryName: string, handler: QueryHandlerBase<IQuery, IResult>) {
        this.containerDictionary.Add(queryName, handler);
    }

    public async ExecuteQuery<TQuery extends IQuery, TResult extends IResult>(query: TQuery): Promise<TResult | undefined> {
        if (this.containerDictionary.ContainsKey(query.Key)) {
            const handler = this.containerDictionary.Item(query.Key);
            return await handler.Execute(query) as Promise<TResult>;
        }
    }
}