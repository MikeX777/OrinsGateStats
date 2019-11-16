import { injectable, inject } from 'tsyringe';
import { IPlayerService } from './Interfaces/Index';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { RegisterPlayerCommand } from '../4.Data/ComandLayer/1.Commands/RegisterPlayerCommand';
import { RegisterPlayerRequest } from '../1.Controllers/Requests/RegisterPlayerRequest';

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
}