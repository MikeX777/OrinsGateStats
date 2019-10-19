export abstract class QueryHandlerBase<TQuery, TResult> {
    public abstract async Execute(query: TQuery) : Promise<TResult>;
}