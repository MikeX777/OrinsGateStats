import { container } from 'tsyringe';
import { BuildQueryContainer, BuildCommandContainer } from './Builder';
import { CharacterService } from '../../Layers/2.Services/Index';
import { PlayerService } from '../../Layers/2.Services/PlayerService';

const queryContainer = BuildQueryContainer();
container.register('QueryContainer', {
    useValue: queryContainer
});

const commandContainer = BuildCommandContainer();
container.register('CommandContainer', {
    useValue: commandContainer
});

container.register('ICharacterService', {
   useValue: container.resolve<CharacterService>(CharacterService)
});

container.register('IPlayerService', {
    useValue: container.resolve<PlayerService>(PlayerService)
});


export default { container };