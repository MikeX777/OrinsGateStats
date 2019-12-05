import { RegisterPlayerRequest } from '../../1.Controllers/Requests/Player/RegisterPlayerRequest';
import { LoginRequest } from '../../1.Controllers/Requests/Player/LoginRequest';
import { CreateCharacterRequest } from '../../1.Controllers/Requests/Player/CreateCharacterRequest';

export interface IPlayerService {
    RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number>;
    Login(loginRequest: LoginRequest): Promise<string>;
    CreateCharacter(createCharacterRequest: CreateCharacterRequest): Promise<any>;
}