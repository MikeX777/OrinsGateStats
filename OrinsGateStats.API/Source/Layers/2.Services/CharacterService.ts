import { inject, injectable } from 'tsyringe';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { AddRaceRequest } from '../1.Controllers/Requests/Race/AddRaceRequest/AddRaceRequest';
import { Character } from '../3.Domain/Character/Character';
import { AddRaceCommand } from '../4.Data/CommandLayer/1.Commands/Race/AddRaceCommand/AddRaceCommand';
import { GetAllRacesQuery } from '../4.Data/QueryLayer/1.Queries/Race/GetAllRacesQuery';
import { GetRaceResult } from '../4.Data/QueryLayer/3.Results/Race/GetRaceResult/GetRaceResult';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';
import { RaceDto } from './DtoModels/Race/RaceDto/RaceDto';
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

    public async GetAllRaces(): Promise<RaceDto[]> {
        const races = await this.queryContainer
            .ExecuteQuery<GetAllRacesQuery, GetRaceResult[]>(
                new GetAllRacesQuery(),
            );

        return races;
    }

    public async CreateRace(race: AddRaceRequest): Promise<any> {
        const addRaceCommand = new AddRaceCommand(race.Name, race.RaceBonuses);
        return await this.commandContainer.ExecuteCommand(addRaceCommand);
    }
}
