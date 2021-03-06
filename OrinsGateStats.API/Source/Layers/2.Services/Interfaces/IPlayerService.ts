import { CreateCharacterRequest } from '../../1.Controllers/Requests/Player/CreateCharacterRequest';
import { LoginRequest } from '../../1.Controllers/Requests/Player/LoginRequest';
import { RegisterPlayerRequest } from '../../1.Controllers/Requests/Player/RegisterPlayerRequest';
import { PlayerDashboardDto } from '../DtoModels/Player/PlayerDashboardDto';
import { PlayerToken } from '../DtoModels/Player/PlayerToken';

export interface IPlayerService {
    RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number>;
    Login(loginRequest: LoginRequest): Promise<PlayerToken>;
    CreateCharacter(createCharacterRequest: CreateCharacterRequest): Promise<any>;
    GetPlayerDashboard(playerID: number): Promise<PlayerDashboardDto>;
}
