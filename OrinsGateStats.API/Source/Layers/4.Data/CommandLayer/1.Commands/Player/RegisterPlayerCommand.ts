import { ICommand } from '../../../../../Infrastructure/Interfaces/ICommand';

export class RegisterPlayerCommand implements ICommand {
    Key: string = 'RegisterPlayer';

    FirstName: string;
    LastName: string;
    Username: string;
    Email: string;
    Password: string;

    constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Username = username;
        this.Email = email;
        this.Password = password;
    }

}
