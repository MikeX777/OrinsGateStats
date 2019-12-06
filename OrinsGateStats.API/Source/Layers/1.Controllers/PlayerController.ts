import { Request, Response, Router } from 'express';
import { check, sanitizeParam, validationResult } from 'express-validator';
import { inject, injectable } from 'tsyringe';
import { CheckJwt } from '../../Infrastructure/Authorization/CheckJwt';
import { IPlayerService } from '../2.Services/Interfaces/Index';
import { CreateCharacterRequest } from './Requests/Player/CreateCharacterRequest';
import { LoginRequest } from './Requests/Player/LoginRequest';

@injectable()
export class PlayerController {

    private readonly path: string = '/api/player/';

    constructor(
        @inject('IRouter') private router: Router,
        @inject('IPlayerService') private playerService: IPlayerService,
    ) {

        this.router.post(`${this.path}`, [
            check('FirstName').exists(),
            check('LastName').exists(),
            check('Username').exists(),
            check('Email').isEmail(),
            check('Password').exists(),
            check('ConfirmPassword', 'ConfirmPassword field must have the same value as the Password field')
                .exists()
                .custom((value, { req }) => value === req.body.Password),
        ], this.RegisterPlayer.bind(this));

        this.router.post(`${this.path}login`, [
            check('EmailOrUsername').exists(),
            check('Password'),
        ], this.Login.bind(this));

        this.router.post(`${this.path}createCharacter`, [
            CheckJwt,
            check('CharacterName').exists(),
            check('Conscious').exists(),
            check('Alive').exists(),
            check('Stable').exists(),
            check('MaxHealth').exists(),
            check('CurrentHealth').exists(),
            check('Strength').exists(),
            check('Dexterity').exists(),
            check('Constitution').exists(),
            check('Intelligence').exists(),
            check('Wisdom').exists(),
            check('Charisma').exists(),
            check('Speed').exists(),
            check('Copper').exists(),
            check('Silver').exists(),
            check('Gold').exists(),
            check('MaxHitDice').exists(),
            check('CurrentHitDice').exists(),
            check('Exhaustion').exists(),
            check('RaceID').exists(),
            check('CharacterClassID').exists(),
            check('CampaignID').exists(),
            check('PlayerID').exists(),
            check('ArmorID').exists(),
            check('ShieldID').exists(),
            check('LanguageIDs').exists().isArray(),
            check('FeatIDs').exists().isArray(),
            check('TrickIDs').exists().isArray(),
            check('PowerIDs').exists().isArray(),
        ], this.CreateCharacter.bind(this));

        this.router.get(`${this.path}dashboard/:PlayerID`, [
            CheckJwt,
            sanitizeParam('PlayerID').toInt(),
        ], this.GetPlayerDashboard.bind(this));
    }

    public async RegisterPlayer(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }

        const identity = await this.playerService.RegisterPlayer({
            FirstName: request.body.FirstName,
            LastName: request.body.LastName,
            Username: request.body.Username,
            Email: request.body.Email,
            Password: request.body.Password,
        });

        if (identity === -1) {
            return response.status(401).send('Player already exists with either that email or username.');
        }

        return response.status(200).send({ ID: identity });
    }

    public async Login(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ Errors: errors.array() });
        }

        const requestObject: LoginRequest = {
            EmailOrUsername: request.body.EmailOrUsername,
            Password: request.body.Password,
        };

        const token = await this.playerService.Login(requestObject);

        if (token === undefined) {
            return response.status(401).send('Password incorrect, or player not found.');
        }

        return response.status(200).send({ Token: token });
    }

    public async CreateCharacter(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ Errors: errors.array() });
        }

        if (request.body.PlayerID !== response.locals.jwtPayload.PlayerID) {
            return response.status(400).send('Bad Request');
        }

        const requestObject: CreateCharacterRequest = {
            CharacterName: request.body.CharacterName,
            Conscious: request.body.Conscious,
            Alive: request.body.Alive,
            Stable: request.body.Stable,
            MaxHealth: request.body.MaxHealth,
            CurrentHealth: request.body.CurrentHealth,
            Strength: request.body.Strength,
            Dexterity: request.body.Dexterity,
            Constitution: request.body.Constitution,
            Intelligence: request.body.Intelligence,
            Wisdom: request.body.Wisdom,
            Charisma: request.body.Charisma,
            Speed: request.body.Speed,
            Copper: request.body.Copper,
            Silver: request.body.Silver,
            Gold: request.body.Gold,
            MaxHitDice: request.body.MaxHitDice,
            CurrentHitDice: request.body.CurrentHitDice,
            Exhaustion: request.body.Exhaustion,
            RaceID: request.body.RaceID,
            CharacterClassID: request.body.CharacterClassID,
            CampaignID: request.body.CampaignID,
            PlayerID: request.body.PlayerID,
            ArmorID: request.body.ArmorID,
            ShieldID: request.body.ShieldID,
            LanguageIDs: request.body.LanguageIDs,
            FeatIDs: request.body.FeatIDs,
            TrickIDs: request.body.TrickIDs,
            PowerIDs: request.body.PowerIDs,
        };

        const newCharacter =  await this.playerService.CreateCharacter(requestObject);
        return response.status(200).send(newCharacter);
    }

    public async GetPlayerDashboard(request: Request, response: Response) {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ Errors: errors.array() });
        }

        if (request.params.PlayerID !== response.locals.jwtPayload.PlayerID) {
            return response.status(400).send('Bad Request');
        }

        const playerDashboard = await this.playerService.GetPlayerDashboard(
            request.params.PlayerID as unknown as number);
        return response.status(200).send(playerDashboard);
    }
}
