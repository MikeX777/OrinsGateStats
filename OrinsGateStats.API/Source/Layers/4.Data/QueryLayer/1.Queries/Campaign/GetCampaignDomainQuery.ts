import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetCampaignDomainQuery implements IQuery {
    public Key: string = 'GetCampaignDomainQuery';
    public CampaignID: number;

    constructor(campaignID: number) {
        this.CampaignID = campaignID;
    }
}
