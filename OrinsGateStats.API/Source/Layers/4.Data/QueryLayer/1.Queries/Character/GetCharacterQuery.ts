import { IQuery } from '../../../../../Infrastructure/Interfaces/IQuery';

export class GetCharacterQuery implements IQuery {
    Key: string = 'GetCharacterQuery';
    CharacterID: number;
}