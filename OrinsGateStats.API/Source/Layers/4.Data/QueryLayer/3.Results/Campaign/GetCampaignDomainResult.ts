import { CampaignDomainCharacterResult } from './DomainSubresults/CampaignDomainCharacterResult';
import { CampaignDomainPlayerResult } from './DomainSubresults/CampaignDomainPlayerResult';
import { CampaignDomainRequestResult } from './DomainSubresults/CampaignDomainRequestResult';

export class GetCampaignDomainResult {

    public ID: number;
    public Name: string;
    public DungeonMaster: CampaignDomainPlayerResult;
    public Requests: CampaignDomainRequestResult[];
    public Characters: CampaignDomainCharacterResult[];
}
