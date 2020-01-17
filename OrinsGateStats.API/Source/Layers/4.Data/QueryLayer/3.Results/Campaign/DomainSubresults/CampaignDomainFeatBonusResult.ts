import { CampaignDomainBonusResult } from './CampaignDomainBonusResult';
import { CampaignDomainStatTypeResult } from './CampaignDomainStatTypeResult';

export class CampaignDomainFeatBonusResult {

    public ID: number;
    public FeatID: number;
    public BonusID: number;
    public StatTypeID: number;
    public Bonus: CampaignDomainBonusResult;
    public StatType: CampaignDomainStatTypeResult;
}
