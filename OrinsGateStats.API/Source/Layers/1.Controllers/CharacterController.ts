import { Request, Response, Router } from 'express';
import {injectable, inject} from 'tsyringe';
import { ICharacterService } from '../2.Services/Interfaces/Index';
import { CheckJwt } from '../../Infrastructure/Authorization/CheckJwt';



@injectable()
export class CharacterController  {

    private readonly path: string = '/api/character/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('ICharacterService') public characterService: ICharacterService
    ) {
        this.router.get(`${this.path}:characterID`, [CheckJwt], this.getPersons.bind(this))
    }

    async getPersons(request: Request, response: Response) {
        let dashboard = await this.characterService.GetCharacterDisplay(parseInt(request.params['characterID']));
        response.status(200).send(dashboard);
    }
}