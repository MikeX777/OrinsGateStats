import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class FindPlayerByEmailOrUsernameQuery implements IQuery {
    Key = 'FindPlayerbyEmailOrUsernameQuery'

    EmailOrUsername: string;

    constructor(emailOrUsername: string) {
        this.EmailOrUsername = emailOrUsername;
    }
}