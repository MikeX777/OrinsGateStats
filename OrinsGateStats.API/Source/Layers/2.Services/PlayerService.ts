import { injectable, inject } from 'tsyringe';
import { IPlayerService } from './Interfaces/Index';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { RegisterPlayerCommand } from '../4.Data/ComandLayer/1.Commands/RegisterPlayerCommand';
import { RegisterPlayerRequest } from '../1.Controllers/Requests/RegisterPlayerRequest';
import { LoginRequest } from '../1.Controllers/Requests/LoginRequest';
import { FindPlayerByEmailOrUsernameQuery } from '../4.Data/QueryLayer/1.Queries/Player/FindPlayerByEmailOrUsernameQuery';
import { FindPlayerByEmailOrUsernameResult } from '../4.Data/QueryLayer/3.Results/Player/FindPlayerByEmailOrUsernameResult';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import secret from '../../Infrastructure/Authorization/JwtSecret';

@injectable()
export class PlayerService implements IPlayerService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer,
        @inject('CommandContainer') private commandContainer: CommandContainer
    ) {
    }

    public async RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number> {
        let registerPlayerCommand = new RegisterPlayerCommand(
            registerPlayerRequest.FirstName,
            registerPlayerRequest.LastName,
            registerPlayerRequest.Username,
            registerPlayerRequest.Email,
            registerPlayerRequest.Password);
        return await this.commandContainer.ExecuteCommand(registerPlayerCommand);
    }

    public async Login(loginRequest: LoginRequest): Promise<string> {
        let findPlayerByEmailOrUsernameQuery = new FindPlayerByEmailOrUsernameQuery(loginRequest.EmailOrUsername);

        let player = await this.queryContainer.ExecuteQuery<FindPlayerByEmailOrUsernameQuery, FindPlayerByEmailOrUsernameResult>(findPlayerByEmailOrUsernameQuery);
        if (player !== undefined) {
            if (await compare(loginRequest.Password, player.Password)) {
                return sign({ PlayerID: player.ID }, secret, { expiresIn: '4h' });
            }
        }
        return undefined;
    }
}