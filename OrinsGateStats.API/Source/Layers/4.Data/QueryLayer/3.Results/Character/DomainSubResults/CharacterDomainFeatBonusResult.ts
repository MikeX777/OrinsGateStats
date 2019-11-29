import { CharacterDomainBonusResult } from "./CharacterDomainBonusResult";
import { CharacterDomainStatTypeResult } from "./CharacterDomainStatTypeResult";

export class CharacterDomainFeatBonusResult {

    ID: number;
    FeatID: number;
    BonusID: number;
    StatTypeID: number;
    Bonus: CharacterDomainBonusResult;
    StatType: CharacterDomainStatTypeResult;
}