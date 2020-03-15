import { CampaignDashboardDto } from '../DtoModels/Campaign/CampaignDashboardDto/CampaignDashboardDto';

export interface ICampaignService {
    GetCampaignDisplay(campaignID: number): Promise<CampaignDashboardDto>;
}
