import { IQuery } from "../../../../../Infrastructure/Interfaces/IQuery";
import { GetCharacterResult } from "../../3.Results/Character/GetCharacterResult";

export class GetCharacterQuery implements IQuery<GetCharacterResult> {
    CharacterID: number;
}