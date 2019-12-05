import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';
import { PlayerDomainCharacterResult } from './DomainSubResults/PlayerDomainCharacterResult';

export class GetPlayerDomainResult implements IResult {
    ID: number;
    Username: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
    Characters: PlayerDomainCharacterResult[];
}
