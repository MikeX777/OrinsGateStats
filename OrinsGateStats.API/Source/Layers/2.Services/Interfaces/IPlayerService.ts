import { RegisterPlayerRequest } from '../../1.Controllers/Requests/RegisterPlayerRequest';

export interface IPlayerService {
    RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number>;
}