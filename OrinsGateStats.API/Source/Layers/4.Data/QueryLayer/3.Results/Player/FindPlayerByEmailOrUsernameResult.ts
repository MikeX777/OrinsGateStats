import { IResult } from '../../../../../Infrastructure/Interfaces/IResult';

export class FindPlayerByEmailOrUsernameResult implements IResult {

    ID: number;
    Username: string;
    Email: string;
    Password: string;
    FirstName: string;
    LastName: string;
}