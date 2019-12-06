import { PlayerDashboardCharacterDto } from './SubObjects/PlayerDashboardCharacterDto';

export class PlayerDashboardDto {
    public ID: number;
    public FirstName: string;
    public LastName: string;
    public Characters: PlayerDashboardCharacterDto[];
}
