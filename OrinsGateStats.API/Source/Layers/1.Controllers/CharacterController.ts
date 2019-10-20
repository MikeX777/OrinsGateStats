import { Request, Response, Router } from 'express';
import {injectable, inject} from "tsyringe";
import { ICharacterService } from '../2.Services/Interfaces/Index';



@injectable()
export class CharacterController  {

    private readonly path: string = '/api/character/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('ICharacterService') public characterService: ICharacterService
    ) {
        this.router.get(`${this.path}:characterID`, this.getPersons.bind(this))
    }

    async getPersons(request: Request, response: Response) {
        await this.characterService.GetCharacterDisplay(parseInt(request.params['characterID']));
        response.status(200).send('hello');
    }
}