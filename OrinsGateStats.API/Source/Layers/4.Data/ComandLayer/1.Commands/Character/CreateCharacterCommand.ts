export class CreateCharacterCommand {
    public Key: string = 'CreateCharacterCommand';

    public CharacterName: string;
    public Conscious: boolean;
    public Alive: boolean;
    public Stable: boolean;
    public MaxHealth: number;
    public CurrentHealth: number;
    public Strength: number;
    public Dexterity: number;
    public Constitution: number;
    public Intelligence: number;
    public Wisdom: number;
    public Charisma: number;
    public Speed: number;
    public Copper: number;
    public Silver: number;
    public Gold: number;
    public MaxHitDice: number;
    public CurrentHitDice: number;
    public Exhaustion: number;
    public RaceID: number;
    public CharacterClassID: number;
    public CampaignID: number;
    public PlayerID: number;
    public ArmorID: number;
    public ShieldID: number;
    public LanguageIDs: number[];
    public FeatIDs: number[];
    public TrickIDs: number[];
    public PowerIDs: number[];

    constructor(characterName: string, conscious: boolean, alive: boolean, stable: boolean, maxHealth: number,
                currentHealth: number, strength: number, dexterity: number, constitution: number, intelligence: number,
                wisdom: number, charisma: number, speed: number, copper: number, silver: number,
                gold: number, maxHitDice: number, currenthitDice: number, exhaustion: number, raceID: number,
                characterClassID: number, campaignID: number, playerID: number, armorID: number, shieldID: number,
                languageIDs: number[], featIDs: number[], trickIDs: number[], powerIDs: number[]) {
            this.CharacterName = characterName;
            this.Conscious = conscious;
            this.Alive = alive;
            this.Stable = stable;
            this.MaxHealth = maxHealth;
            this.CurrentHealth = currentHealth;
            this.Strength = strength;
            this.Dexterity = dexterity;
            this.Constitution = constitution;
            this.Intelligence = intelligence;
            this.Wisdom = wisdom;
            this.Charisma = charisma;
            this.Speed = speed;
            this.Copper = copper;
            this.Silver = silver;
            this.Gold = gold;
            this.MaxHitDice = maxHitDice;
            this.CurrentHitDice = currenthitDice;
            this.Exhaustion = exhaustion;
            this.RaceID = raceID;
            this.CharacterClassID = characterClassID;
            this.CampaignID = campaignID;
            this.PlayerID = playerID;
            this.ArmorID = armorID;
            this.ShieldID = shieldID;
            this.LanguageIDs = languageIDs;
            this.FeatIDs = featIDs;
            this.TrickIDs = trickIDs;
            this.PowerIDs = powerIDs;
        }
}
