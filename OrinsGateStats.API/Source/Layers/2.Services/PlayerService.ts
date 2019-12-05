import { injectable, inject } from 'tsyringe';
import { IPlayerService } from './Interfaces/Index';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { RegisterPlayerCommand } from '../4.Data/ComandLayer/1.Commands/Player/RegisterPlayerCommand';
import { RegisterPlayerRequest } from '../1.Controllers/Requests/Player/RegisterPlayerRequest';
import { LoginRequest } from '../1.Controllers/Requests/Player/LoginRequest';
import { FindPlayerByEmailOrUsernameQuery } from '../4.Data/QueryLayer/1.Queries/Player/FindPlayerByEmailOrUsernameQuery';
import { FindPlayerByEmailOrUsernameResult } from '../4.Data/QueryLayer/3.Results/Player/FindPlayerByEmailOrUsernameResult';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import secret from '../../Infrastructure/Authorization/JwtSecret';
import { CreateCharacterRequest } from '../1.Controllers/Requests/Player/CreateCharacterRequest';
import { Player } from '../3.Domain/Player/Player';
import { PlayerDashboardDto } from './DtoModels/Player/PlayerDashboardDto';

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

    public async CreateCharacter(createCharacterRequest: CreateCharacterRequest): Promise<any> {
        let player = new Player(createCharacterRequest.PlayerID, this.queryContainer, this.commandContainer);

        return await player.CreateCharacter(createCharacterRequest);
    }

    public async GetPlayerDashboard(playerID: number): Promise<PlayerDashboardDto> {
        let player = new Player(playerID, this.queryContainer, this.commandContainer);
        await player.Retrieve();
        return await player.BuildPlayerDashboard();
    }
}
