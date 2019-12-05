import { injectable, inject } from 'tsyringe';
import { ICharacterService } from './Interfaces/Index';
import { Character } from '../3.Domain/Character/Character';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';


@injectable()
export class CharacterService implements ICharacterService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer,
        @inject('CommandContainer') private commandContainer: CommandContainer
        ) {
    }

    public async GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto> {
        let character = new Character(characterID, this.queryContainer, this.commandContainer);
        await character.Retrieve();
        return await character.BuildCharacterDashboard();
    }
}
