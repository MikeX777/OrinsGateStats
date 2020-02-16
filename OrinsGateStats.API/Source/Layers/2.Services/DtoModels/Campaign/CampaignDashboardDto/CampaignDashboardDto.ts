import { CharacterDto } from './CharacterDto';

export class CampaignDashboardDto {

    public ID: number;
    public Name: string;
    public DungeonMasterPlayerID: number;
    public DungeonMasterFirstName: string;
    public DungeonMasterLastName: string;
    public Characters: CharacterDto[];
}