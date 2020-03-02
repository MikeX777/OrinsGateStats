import { RaceBonus } from './RaceBonus';

export class AddRaceCommand {
    public Key: string = 'AddRaceCommand';

    public Name: string;
    public RaceBonuses: RaceBonus[];

    constructor(name: string, raceBonuses: RaceBonus[]) {
        this.Name = name;
        this.RaceBonuses = raceBonuses;
    }
}
