import { RaceBonus } from './RaceBonus';

export class AddRaceCommand {
    public Key: string = 'AddRaceCommand';

    public Name: string;
    public RaceBonuses: RaceBonus[];
}
