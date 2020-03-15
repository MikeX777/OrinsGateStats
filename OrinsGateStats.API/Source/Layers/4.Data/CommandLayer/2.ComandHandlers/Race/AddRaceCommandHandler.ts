import { getRepository } from 'typeorm';
import { CommandHandlerBase } from '../../../../../Infrastructure/BaseClasses/CommandHandlerBase';
import { TBRace } from '../../../../5.Entities/TBRace';
import { TBRaceBonus } from '../../../../5.Entities/TBRaceBonus';
import { AddRaceCommand } from '../../1.Commands/Race/AddRaceCommand/AddRaceCommand';

export class AddRaceCommandHandler implements CommandHandlerBase<AddRaceCommand> {
    public async Execute(command: AddRaceCommand): Promise<any> {
        const raceRepostory = getRepository(TBRace);
        const raceBonusRepository = getRepository(TBRaceBonus);

        const raceExists = await raceRepostory.findOne({ where: { Name: command.Name }});
        if (raceExists) {
            return -1;
        }

        const newRace = raceRepostory.create({ Name: command.Name });
        await raceRepostory.save(newRace);

        command.RaceBonuses.forEach((bonus) => {
            const raceBonus = raceBonusRepository.create({
                RaceID: newRace.ID,
                StatTypeID: bonus.StatTypeID,
                Bonus: bonus.Bonus,
            });
            raceBonusRepository.save(raceBonus);
        });

        return newRace;

    }
}
