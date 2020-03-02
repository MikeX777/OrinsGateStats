import { AddRaceRequest } from '../../1.Controllers/Requests/Race/AddRaceRequest/AddRaceRequest';
import { CharacterDashboradDto } from '../DtoModels/Character/CharacterDashboardDto';
import { RaceDto } from '../DtoModels/Race/RaceDto/RaceDto';

export interface ICharacterService {
    GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto>;
    GetAllRaces(): Promise<RaceDto[]>;
    CreateRace(addRaceRequest: AddRaceRequest): Promise<any>;
}
