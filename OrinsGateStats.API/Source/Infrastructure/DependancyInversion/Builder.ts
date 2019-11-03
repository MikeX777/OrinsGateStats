import { QueryContainer } from "./QueryContainer";
import { GetCharacterQueryHandler } from "../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterQueryHandler";
import { GetRaceQueryHandler } from "../../Layers/4.Data/QueryLayer/2.QueryHandlers/Race/GetRaceQueryHandler";
import { GetCharacterDomainQueryHandler } from "../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterDomainQueryHandler";

export function BuildQueryContainer(): QueryContainer {
    let queryContainer = new QueryContainer();

    queryContainer.Register('GetCharacterQuery', new GetCharacterQueryHandler());
    queryContainer.Register('GetCharacterDomainQuery', new GetCharacterDomainQueryHandler());
    queryContainer.Register('GetRaceQuery', new GetRaceQueryHandler());

    return queryContainer;
}