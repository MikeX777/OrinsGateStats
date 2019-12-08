import { inject, injectable } from 'tsyringe';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { Character } from '../3.Domain/Character/Character';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';
import { ICharacterService } from './Interfaces/Index';

@injectable()
export class CharacterService implements ICharacterService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer,
        @inject('CommandContainer') private commandContainer: CommandContainer,
        ) {
    }

    public async GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto> {
        const character = new Character(characterID, this.queryContainer, this.commandContainer);
        await character.Retrieve();
        return await character.BuildCharacterDashboard();
    }
}
