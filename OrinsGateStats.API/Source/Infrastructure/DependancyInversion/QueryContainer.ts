import { IQuery } from "../../Infrastructure/Interfaces/IQuery";
import { Dictionary } from "../../Utilities/Dictionary";
import { IResult } from "../../Infrastructure/Interfaces/IResult";
import { QueryHandlerBase } from "../../Infrastructure/BaseClasses/QueryHandlerBase";
import { GetCharacterQuery } from "../../Layers/4.Data/QueryLayer/1.Queries/Character/GetCharacterQuery";
import { GetCharacterResult } from "../../Layers/4.Data/QueryLayer/3.Results/Character/GetCharacterResult";
import { GetCharacterQueryHandler } from "../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterQueryHandler";

export class QueryContainer {
    
    private containerDictionary: Dictionary<IQuery<IResult>, QueryHandlerBase<IQuery<IResult>, IResult>> =
        new Dictionary<IQuery<IResult>, QueryHandlerBase<IQuery<IResult>, IResult>>();

    constructor() {
        this.containerDictionary.Add(new GetCharacterQuery(), new GetCharacterQueryHandler())      
    }

    // public TResult Execute<TQuery, TResult>
}