import { Request, Response, Router } from 'express';
import { check, sanitizeBody, sanitizeParam, validationResult } from 'express-validator';
import { inject, injectable } from 'tsyringe';
import { CheckJwt } from '../../Infrastructure/Authorization/CheckJwt';
import { ICharacterService } from '../2.Services/Interfaces/Index';
import { AddRaceRequest } from './Requests/Race/AddRaceRequest/AddRaceRequest';

@injectable()
export class CharacterController  {

    private readonly path: string = '/api/character/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('ICharacterService') public characterService: ICharacterService,
    ) {
        this.router.get(`${this.path}dashboard/:characterID`, [
            CheckJwt,
            sanitizeParam('characterID').toInt(),
        ], this.getCharacterDashboard.bind(this));

        this.router.get(`/api/race/allRaces`,
            this.getRaces.bind(this));

        this.router.post(`/api/race/addRace`, [
            CheckJwt,
            check('name').exists(),
            check('raceBonuses').exists().isArray(),
            sanitizeBody('*'),
        ], this.addRace.bind(this));
    }

    public async getCharacterDashboard(request: Request, response: Response) {
        const dashboard = await this.characterService.GetCharacterDisplay(
            request.params.characterID as unknown as number);

        if (dashboard.PlayerID !== response.locals.jwtPayload.PlayerID) {
            return response.status(400).send('Bad Request');
        }

        response.status(200).send(dashboard);
    }

    public async getRaces(request: Request, response: Response) {
        const races = await this.characterService.GetAllRaces();
        response.status(200).send(races);
    }

    public async addRace(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        const addRaceRequest: AddRaceRequest = {
            Name: request.body.name,
            RaceBonuses: request.body.raceBonuses.map((rb) => {
                return {
                    StatTypeID: rb.statTypeID,
                    Bonus: rb.bonus,
                };
            }),
        };

        const race = await this.characterService.CreateRace(addRaceRequest);

        if (race === -1) {
            return response.status(400).send('Race could not be created.');
        }

        return response.status(200).send(race);
    }
}
