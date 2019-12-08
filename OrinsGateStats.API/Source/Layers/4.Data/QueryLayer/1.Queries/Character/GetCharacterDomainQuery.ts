import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetCharacterDomainQuery implements IQuery {
    public Key: string = 'GetCharacterDomainQuery';
    public CharacterID: number;

    constructor(characterID: number) {
        this.CharacterID = characterID;
    }
}
