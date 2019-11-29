import { QueryContainer } from './QueryContainer';
import { GetCharacterQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterQueryHandler';
import { GetRaceQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Race/GetRaceQueryHandler';
import { GetCharacterDomainQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterDomainQueryHandler';
import { CommandContainer } from './CommandContainer';
import { RegisterPlayerCommandHandler } from '../../Layers/4.Data/ComandLayer/2.ComandHandlers/RegisterPlayerCommandHandler';
import { FindPlayerByEmailOrUsernameQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Player/FindPlayerByEmailOrUsernameQueryHandler';

export function BuildQueryContainer(): QueryContainer {
    let queryContainer = new QueryContainer();

    queryContainer.Register('GetCharacterQuery', new GetCharacterQueryHandler());
    queryContainer.Register('GetCharacterDomainQuery', new GetCharacterDomainQueryHandler());
    queryContainer.Register('GetRaceQuery', new GetRaceQueryHandler());
    queryContainer.Register('FindPlayerbyEmailOrUsernameQuery', new FindPlayerByEmailOrUsernameQueryHandler())

    return queryContainer;
}

export function BuildCommandContainer(): CommandContainer {

    let commandContainer = new CommandContainer();

    commandContainer.Register('RegisterPlayer', new RegisterPlayerCommandHandler());

    return commandContainer;

}