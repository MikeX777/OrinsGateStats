import { QueryContainer } from './QueryContainer';
import { GetCharacterQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterQueryHandler';
import { GetRaceQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Race/GetRaceQueryHandler';
import { GetCharacterDomainQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Character/GetCharacterDomainQueryHandler';
import { CommandContainer } from './CommandContainer';
import { RegisterPlayerCommandHandler } from '../../Layers/4.Data/CommandLayer/2.ComandHandlers/Player/RegisterPlayerCommandHandler';
import { FindPlayerByEmailOrUsernameQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Player/FindPlayerByEmailOrUsernameQueryHandler';
import { CreateCharacterCommandHandler } from '../../Layers/4.Data/CommandLayer/2.ComandHandlers/Character/CreateCharacterCommandHandler';
import { GetPlayerDomainQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Player/GetPlayerDomainQueryHandler';
import { GetAllRacesQueryHandler } from '../../Layers/4.Data/QueryLayer/2.QueryHandlers/Race/GetAllRacesQueryHandler';

export function BuildQueryContainer(): QueryContainer {
    const queryContainer = new QueryContainer();

    queryContainer.Register('GetCharacterQuery', new GetCharacterQueryHandler());
    queryContainer.Register('GetCharacterDomainQuery', new GetCharacterDomainQueryHandler());
    queryContainer.Register('GetRaceQuery', new GetRaceQueryHandler());
    queryContainer.Register('FindPlayerbyEmailOrUsernameQuery', new FindPlayerByEmailOrUsernameQueryHandler())
    queryContainer.Register('GetPlayerDomainQuery', new GetPlayerDomainQueryHandler());
    queryContainer.Register('GetAllRacesQuery', new GetAllRacesQueryHandler());

    return queryContainer;
}

export function BuildCommandContainer(): CommandContainer {

    const commandContainer = new CommandContainer();

    commandContainer.Register('RegisterPlayer', new RegisterPlayerCommandHandler());
    commandContainer.Register('CreateCharacterCommand', new CreateCharacterCommandHandler());

    return commandContainer;

}