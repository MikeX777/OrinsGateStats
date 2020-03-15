import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { environment } from '../.././Environment/environment';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CreateCharacterRequest } from '../1.Controllers/Requests/Player/CreateCharacterRequest';
import { LoginRequest } from '../1.Controllers/Requests/Player/LoginRequest';
import { RegisterPlayerRequest } from '../1.Controllers/Requests/Player/RegisterPlayerRequest';
import { Player } from '../3.Domain/Player/Player';
import { RegisterPlayerCommand } from '../4.Data/CommandLayer/1.Commands/Player/RegisterPlayerCommand';
import { FindPlayerByEmailOrUsernameQuery } from '../4.Data/QueryLayer/1.Queries/Player/FindPlayerByEmailOrUsernameQuery';
import { FindPlayerByEmailOrUsernameResult } from '../4.Data/QueryLayer/3.Results/Player/FindPlayerByEmailOrUsernameResult';
import { PlayerDashboardDto } from './DtoModels/Player/PlayerDashboardDto';
import { PlayerToken } from './DtoModels/Player/PlayerToken';
import { IPlayerService } from './Interfaces/Index';

@injectable()
export class PlayerService implements IPlayerService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer,
        @inject('CommandContainer') private commandContainer: CommandContainer,
    ) {
    }

    public async RegisterPlayer(registerPlayerRequest: RegisterPlayerRequest): Promise<number> {
        const registerPlayerCommand = new RegisterPlayerCommand(
            registerPlayerRequest.FirstName,
            registerPlayerRequest.LastName,
            registerPlayerRequest.Username,
            registerPlayerRequest.Email,
            registerPlayerRequest.Password);
        return await this.commandContainer.ExecuteCommand(registerPlayerCommand);
    }

    public async Login(loginRequest: LoginRequest): Promise<PlayerToken> {

        const player = await this.queryContainer
            .ExecuteQuery<FindPlayerByEmailOrUsernameQuery, FindPlayerByEmailOrUsernameResult>(
                new FindPlayerByEmailOrUsernameQuery(loginRequest.EmailOrUsername),
            );
        if (player !== undefined) {
            if (await compare(loginRequest.Password, player.Password)) {
                return { Token: sign({ PlayerID: player.ID }, environment.jwtSecret,
                    { expiresIn: '4h' }), ID: player.ID};
            }
        }
        return undefined;
    }

    public async CreateCharacter(createCharacterRequest: CreateCharacterRequest): Promise<any> {
        const player = new Player(createCharacterRequest.PlayerID, this.queryContainer, this.commandContainer);

        return await player.CreateCharacter(createCharacterRequest);
    }

    public async GetPlayerDashboard(playerID: number): Promise<PlayerDashboardDto> {
        const player = new Player(playerID, this.queryContainer, this.commandContainer);
        await player.Retrieve();
        return await player.BuildPlayerDashboard();
    }
}
