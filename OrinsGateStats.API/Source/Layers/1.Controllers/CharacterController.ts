import { Request, Response, Router } from 'express';
import { sanitizeParam } from 'express-validator';
import {inject, injectable} from 'tsyringe';
import { CheckJwt } from '../../Infrastructure/Authorization/CheckJwt';
import { ICharacterService } from '../2.Services/Interfaces/Index';

@injectable()
export class CharacterController  {

    private readonly path: string = '/api/character/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('ICharacterService') public characterService: ICharacterService,
    ) {
        this.router.get(`${this.path}:characterID`, [
            CheckJwt,
            sanitizeParam('characterID').toInt(),
        ], this.getPersons.bind(this));
    }

    public async getPersons(request: Request, response: Response) {
        const dashboard = await this.characterService.GetCharacterDisplay(
            request.params.characterID as unknown as number);

        if (dashboard.PlayerID !== response.locals.jwtPayload.PlayerID) {
            return response.status(400).send('Bad Request');
        }

        response.status(200).send(dashboard);
    }
}
