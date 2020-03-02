import { CharacterDomainStatTypeResult } from './CharacterDomainStatTypeResult';

export class CharacterDomainFeatBonusResult {

    public ID: number;
    public FeatID: number;
    public StatTypeID: number;
    public Bonus: number;
    public StatType: CharacterDomainStatTypeResult;
}
