export class CharacterDto {

    public ID: number;
    public Name: string;
    public Conscious: boolean;
    public Alive: boolean;
    public Stable: boolean;
    public MaxHealth: number;
    public CurrentHealth: number;
    public RaceName: string;
    public CharacterClassName: string;
    public PlayerID: number;
    public Languages: string[];
    public LanguageIDs: number[];
    public Feats: string[];
    public FeatIDs: number[];
    public Tricks: string[];
    public TrickIDs: number[];
    public Powers: string[];
    public PowerIDs: number[];
}