import { ICampaignService } from './Interfaces/ICampaignService';
import { injectable, inject } from 'tsyringe';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CommandContainer } from '../../Infrastructure/DependancyInversion/CommandContainer';
import { CampaignDashboardDto } from './DtoModels/Campaign/CampaignDashboardDto/CampaignDashboardDto';
import { Campaign } from '../3.Domain/Campaign/Campaign';

@injectable()
export class CampaignService implements ICampaignService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer,
        @inject('CommandContainer') private commandContainer: CommandContainer
    ) {
    }

    public async GetCampaignDisplay(campaignID: number): Promise<CampaignDashboardDto> {
        const campaign = new Campaign(campaignID, this.queryContainer, this.commandContainer);
        await campaign.Retrieve();
        return await campaign.BuildCampaignDashboard();
    }
}