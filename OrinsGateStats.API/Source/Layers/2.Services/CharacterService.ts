import { injectable, inject } from 'tsyringe';
import { ICharacterService } from './Interfaces/Index';
import { Character } from '../3.Domain/Character';
import { QueryContainer } from '../../Infrastructure/DependancyInversion/QueryContainer';
import { CharacterDashboradDto } from './DtoModels/Character/CharacterDashboardDto';


@injectable()
export class CharacterService implements ICharacterService {

    constructor(
        @inject('QueryContainer') private queryContainer: QueryContainer
        ) {
    }

    public async GetCharacterDisplay(characterID: number): Promise<CharacterDashboradDto> {
        let character = new Character(characterID, this.queryContainer);
        await character.Retrieve();

        let dashboard: CharacterDashboradDto = {
            ID: character.ID,
            CharacterName: character.Name,
            Level: character.MaxHitDice,
            Conscious: character.Conscious,
            Alive: character.Alive,
            MaxHealth: character.MaxHealth,
            CurrentHealth: character.CurrentHealth,
            ArmorClass: character.ArmorClass,
            Strength: character.Strength,
            StrengthModifier: Math.floor((character.Strength - 10) / 2),
            Dexterity: character.Dexterity,
            DexterityModifier: Math.floor((character.Dexterity - 10) / 2),
            Constitution: character.Constitution,
            ConstitutionModifier: Math.floor((character.Constitution - 10) / 2),
            Intelligence: character.Intelligence,
            IntelligenceModifier: Math.floor((character.Intelligence - 10) / 2),
            Wisdom: character.Wisdom,
            WisdomModifier: Math.floor((character.Wisdom - 10) / 2),
            Charisma: character.Charisma,
            CharismaModifier: Math.floor((character.Charisma - 10) / 2),
            ProficiencyBonus: character.ProficiencyBonus,
            Speed: character.Speed,
            Copper: character.Copper,
            Silver: character.Silver,
            Gold: character.Gold,
            MaxHitDice: character.MaxHitDice,
            CurrentHitDice: character.CurrentHitDice,
            RaceName: (await character.Race()).Name
        }

        return dashboard;
    }
}