import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetCharacterQuery implements IQuery {
    public Key: string = 'GetCharacterQuery';
    public CharacterID: number;

    constructor(characterID: number) {
        this.CharacterID = characterID;
    }
}
