import { QueryContainer } from "./QueryContainer";
import { GetCharacterQuery } from "../../Layers/4.Data/QueryLayer/1.Queries/Character/GetCharacterQuery";
import { GetCharacterQueryHandler } from "../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterQueryHandler";

export function RegisterQueries(): QueryContainer {
    let queryContainer = new QueryContainer();

    queryContainer.Register(new GetCharacterQuery().Key, new GetCharacterQueryHandler());

    return queryContainer;
}