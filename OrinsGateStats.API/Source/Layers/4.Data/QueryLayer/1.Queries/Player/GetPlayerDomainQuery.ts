import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetPlayerDomainQuery implements IQuery {
    public Key: string = 'GetPlayerDomainQuery';
    public PlayerID: number;

    constructor(playerID: number) {
        this.PlayerID = playerID;
    }
}
