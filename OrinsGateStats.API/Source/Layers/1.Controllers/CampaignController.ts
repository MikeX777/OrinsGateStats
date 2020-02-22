import { injectable, inject } from 'tsyringe';
import { Router, Request, Response } from 'express';
import { ICampaignService } from '../2.Services/Interfaces/Index';
import { CheckJwt } from '../../Infrastructure/Authorization/CheckJwt';
import { sanitizeParam } from 'express-validator';

@injectable()
export class CampaignController {

    private readonly path: string = '/api/campaign/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('ICampaignService') private campaignService: ICampaignService,
    ) {
        this.router.get(`${this.path}:campaignID`, [
            CheckJwt,
            sanitizeParam('campaignID').toInt(),
        ], this.getCampaignDashboard.bind(this));
    }

    public async getCampaignDashboard(request: Request, response: Response) {
        const dashboard = await this.campaignService.GetCampaignDisplay(
            request.params.campaignID as unknown as number);

        if (dashboard.DungeonMasterPlayerID !== response.locals.jwtPayload.PlayerID) {
            return response.status(400).send('Bad Request');
        }

        response.status(200).send(dashboard);
    }
}
