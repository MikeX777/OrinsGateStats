import { Character } from "../../3.Domain/Character/Character";
import { CharacterDashboradDto } from "../DtoModels/Character/CharacterDashboardDto";


export interface ICharacterService {
    GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto>;
}