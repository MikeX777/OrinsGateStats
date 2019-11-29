import { RegisterPlayerRequest } from '../../1.Controllers/Requests/RegisterPlayerRequest';
import { LoginRequest } from '../../1.Controllers/Requests/LoginRequest';

export interface IPlayerService {
    RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number>;
    Login(loginRequest: LoginRequest): Promise<string>;
}