import { CommandHandlerBase } from '../../../../../Infrastructure/BaseClasses/CommandHandlerBase';
import { AddRaceCommand } from '../../1.Commands/Race/AddRaceCommand/AddRaceCommand';
import { getRepository } from 'typeorm';
import { TBBonus } from '../../../../5.Entities/TBBonus';

export class AddRaceCommandHandler implements CommandHandlerBase<AddRaceCommand> {
    public async Execute(command: AddRaceCommand): Promise<any> {
        const bonusRepository = getRepository(TBBonus);
        
    }
}
