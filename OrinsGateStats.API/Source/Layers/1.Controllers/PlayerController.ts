import { injectable, inject } from 'tsyringe';
import { Router, Response, Request } from 'express';
import { check, validationResult } from 'express-validator';
import { IPlayerService } from '../2.Services/Interfaces/Index';
import { LoginRequest } from './Requests/LoginRequest';

@injectable()
export class PlayerController {

    private readonly path: string = '/api/player/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('IPlayerService') private playerService: IPlayerService
    ) {

        this.router.post(`${this.path}`, [
            check('FirstName').exists(),
            check('LastName').exists(),
            check('Username').exists(),
            check('Email').isEmail(),
            check('Password').exists(),
            check('ConfirmPassword', 'ConfirmPassword field must have the same value as the Password field')
                .exists()
                .custom((value, { req }) => value === req.body.Password)
        ], this.RegisterPlayer.bind(this));

        this.router.post(`${this.path}login`, [
            check('EmailOrUsername').exists(),
            check('Password')
        ], this.Login.bind(this));
    }

    async RegisterPlayer(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        let identity = await this.playerService.RegisterPlayer({
            FirstName: request.body.FirstName,
            LastName: request.body.LastName,
            Username: request.body.Username,
            Email: request.body.Email,
            Password: request.body.Password
        });

        if (identity === -1) {
            return response.status(401).send('Player already exists with either that email or username.')
        }

        return response.status(200).send({ ID: identity });
    }

    async Login(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        let requestObject: LoginRequest = {
            EmailOrUsername: request.body.EmailOrUsername,
            Password: request.body.Password
        };

        const token = await this.playerService.Login(requestObject);

        if (token === undefined) {
            return response.status(401).send('Password incorrect, or player not found.');
        }

        return response.status(200).send({ Token: token });
    }
}