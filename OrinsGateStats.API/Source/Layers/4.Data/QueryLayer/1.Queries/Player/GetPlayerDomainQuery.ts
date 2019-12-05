import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetPlayerDomainQuery implements IQuery {
    Key: string = 'GetPlayerDomainQuery';
    PlayerID: number;

    constructor(playerID: number) {
        this.PlayerID = playerID;
    }
}
