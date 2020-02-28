import { RaceBonus } from './RaceBonus';

export class RaceDto {
    public ID: number;
    public Name: string;
    public RaceBonuses: RaceBonus[];
}