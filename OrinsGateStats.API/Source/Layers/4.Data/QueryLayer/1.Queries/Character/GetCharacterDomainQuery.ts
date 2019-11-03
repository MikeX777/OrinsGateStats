import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetCharacterDomainQuery implements IQuery {
    Key: string = 'GetCharacterDomainQuery';
    CharacterID: number;

    constructor(characterID: number) {
        this.CharacterID = characterID;
    }
}