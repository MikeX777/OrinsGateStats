import { injectable, inject } from 'tsyringe';
import { ICharacterService } from './Interfaces/Index';
import { Character } from '../3.Domain/Character';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';


@injectable()
export class CharacterService implements ICharacterService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer
        ) {
    }

    public async GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto> {
        let character = new Character(characterID, this.queryContainer);
        await character.Retrieve();
        return await character.BuildCharacterDashboard();
    }
}