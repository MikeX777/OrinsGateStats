import { CommandHandlerBase } from '../../../../Infrastructure/BaseClasses/CommandHandlerBase';
import { RegisterPlayerCommand } from '../1.Commands/RegisterPlayerCommand';
import { getRepository } from 'typeorm';
import { TBPlayer } from '../../../5.Entities/TBPlayer';

export class RegisterPlayerCommandHandler implements CommandHandlerBase<RegisterPlayerCommand> {
    public async Execute(command: RegisterPlayerCommand): Promise<number> {
        let playerRepository = await getRepository(TBPlayer);

        let newPlayer = new TBPlayer();
        newPlayer.FirstName = command.FirstName;
        newPlayer.LastName = command.LastName;
        newPlayer.Username =  command.Username;
        newPlayer.Email = command.Email;
        newPlayer.Password = command.Password;

        return (await playerRepository.save(newPlayer)).ID;
    }

}