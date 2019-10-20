import { container } from 'tsyringe';
import { RegisterQueries as BuildQueryContainer } from './Builder';
import { CharacterService } from '../../Layers/2.Services/Index';

const queryContainer = BuildQueryContainer();
container.register('QueryContainer', {
    useValue: queryContainer
});

container.register('ICharacterService', {
   useValue: container.resolve<CharacterService>(CharacterService)
});


export default { container };