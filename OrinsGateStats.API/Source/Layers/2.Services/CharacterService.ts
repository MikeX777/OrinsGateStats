import { inject, injectable } from 'tsyringe';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { Character } from '../3.Domain/Character/Character';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';
import { ICharacterService } from './Interfaces/Index';
import { RaceDto } from './DtoModels/Race/RaceDto/RaceDto';
import { GetAllRacesQuery } from '../4.Data/QueryLayer/1.Queries/Race/GetAllRacesQuery';
import { GetRaceResult } from '../4.Data/QueryLayer/3.Results/Race/GetRaceResult/GetRaceResult';

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

    public async GetAllRaces(): Promise<RaceDto[]> {
        const races = this.queryContainer
            .ExecuteQuery<GetAllRacesQuery, GetRaceResult[]>(
                new GetAllRacesQuery()
            );

        return races;
    }
}
