import { injectable, inject } from 'tsyringe';
import { ICharacterService } from './Interfaces/Index';
import { Character } from '../3.Domain/Character';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';


@injectable()
export class CharacterService implements ICharacterService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer
        ) {
    }

    public GetCharacterDisplay(characterID: number): string {
        let character = new Character(characterID, this.queryContainer);
        return 'hello there';
    }
}