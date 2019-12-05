export class CreateCharacterCommand {
    Key: string = 'CreateCharacterCommand';

    CharacterName: string;
    Conscious: boolean;
    Alive: boolean;
    Stable: boolean;
    MaxHealth: number;
    CurrentHealth: number;
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
    ProficiencyBonus: number;
    Speed: number;
    Copper: number;
    Silver: number;
    Gold: number;
    MaxHitDice: number;
    CurrentHitDice: number;
    Exhaustion: number;
    RaceID: number;
    CharacterClassID: number;
    CampaignID: number;
    PlayerID: number;
    ArmorID: number;
    ShieldID: number;
    LanguageIDs: number[];
    FeatIDs: number[];
    TrickIDs: number[];
    PowerIDs: number[];

    constructor(characterName: string, conscious: boolean, alive: boolean, stable: boolean, maxHealth: number,
        currentHealth: number, strength: number, dexterity: number, constitution: number, intelligence: number,
        wisdom: number, charisma: number, proficiencyBonus: number, speed: number, copper: number, silver: number,
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
            this.ProficiencyBonus = proficiencyBonus;
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
