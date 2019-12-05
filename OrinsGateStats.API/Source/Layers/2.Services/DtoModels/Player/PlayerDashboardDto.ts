import { PlayerDashboardCharacterDto } from './SubObjects/PlayerDashboardCharacterDto';

export class PlayerDashboardDto {
    ID: number;
    FirstName: string;
    LastName: string;
    Characters: PlayerDashboardCharacterDto[];
}
