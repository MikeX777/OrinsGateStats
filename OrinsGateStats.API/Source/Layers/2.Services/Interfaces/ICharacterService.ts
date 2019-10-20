import { Character } from "../../3.Domain/Character";


export interface ICharacterService {
    GetCharacterDisplay(characterID: number): string;
}