import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';
import { PlayerDomainCampaignResult } from './DomainSubResults/PlayerDomainCampaignResult';
import { PlayerDomainCharacterResult } from './DomainSubResults/PlayerDomainCharacterResult';

export class GetPlayerDomainResult implements IResult {
    public ID: number;
    public Username: string;
    public Password: string;
    public Email: string;
    public FirstName: string;
    public LastName: string;
    public Characters: PlayerDomainCharacterResult[];
    public OwnedCampaigns: PlayerDomainCampaignResult[];
}
