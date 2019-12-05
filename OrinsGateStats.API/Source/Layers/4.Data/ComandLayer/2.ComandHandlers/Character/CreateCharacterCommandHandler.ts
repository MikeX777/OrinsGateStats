import { CommandHandlerBase } from '../../../../../Infrastructure/BaseClasses/CommandHandlerBase';
import { CreateCharacterCommand } from '../../1.Commands/Character/CreateCharacterCommand';
import { getRepository } from 'typeorm';
import { TBPlayer } from '../../../../5.Entities/TBPlayer';
import { TBCharacter } from '../../../../5.Entities/TBCharacter';
import { TBCharacterLanguage } from '../../../../5.Entities/TBCharacterLanguage';
import { TBCharacterFeat } from '../../../../5.Entities/TBCharacterFeat';
import { TBCharacterTrick } from '../../../../5.Entities/TBCharacterTrick';
import { TBCharacterPower } from '../../../../5.Entities/TBCharacterPower';

export class CreateCharacterCommandHandler implements CommandHandlerBase<CreateCharacterCommand> {
    public async Execute(command: CreateCharacterCommand): Promise<any> {
        let playerRepository = getRepository(TBPlayer);

        const playerExists = await playerRepository.findOne({where: { ID: command.PlayerID }});

        if (playerExists === undefined) {
            return -1;
        }

        let characterRepository = getRepository(TBCharacter);

        let newCharacter = characterRepository.create({
            Name: command.CharacterName,
            Conscious: command.Conscious,
            Alive: command.Alive,
            Stable: command.Stable,
            MaxHealth: command.MaxHealth,
            CurrentHealth: command.CurrentHealth,
            Strength: command.Strength,
            Dexterity: command.Dexterity,
            Constitution: command.Constitution,
            Intelligence: command.Intelligence,
            Wisdom: command.Wisdom,
            Charisma: command.Charisma,
            ProficiencyBonus: command.ProficiencyBonus,
            Speed: command.Speed,
            Copper: command.Copper,
            Silver: command.Silver,
            Gold: command.Gold,
            MaxHitDice: command.MaxHitDice,
            CurrentHitDice: command.CurrentHitDice,
            Exhaustion: command.Exhaustion,
            PlayerID: command.PlayerID,
            RaceID: command.RaceID,
            CharacterClassID: command.CharacterClassID,
            CampaignID: command.CampaignID,
            ArmorID: command.ArmorID,
            ShieldID: command.ShieldID
        });

        await characterRepository.save(newCharacter);

        let languageRepository = getRepository(TBCharacterLanguage);
        let featRepository = getRepository(TBCharacterFeat);
        let trickRepository = getRepository(TBCharacterTrick);
        let powerRepository = getRepository(TBCharacterPower);

        command.LanguageIDs.forEach(id => {
            let characterLanguage = languageRepository.create({
                CharacterID: newCharacter.ID,
                LanguageID: id
            });
            languageRepository.save(characterLanguage);
        });

        command.FeatIDs.forEach(id => {
            let characterFeat = featRepository.create({
                CharacterID: newCharacter.ID,
                FeatID: id
            })
            featRepository.save(characterFeat);
        });

        command.TrickIDs.forEach(id => {
            let characterTrick = trickRepository.create({
                CharacterID: newCharacter.ID,
                TrickID: id
            });
            trickRepository.save(characterTrick);
        });

        command.PowerIDs.forEach(id => {
            let characterPower = powerRepository.create({
                CharacterID: newCharacter.ID,
                PowerID: id
            });
            powerRepository.save(characterPower);
        });

        return newCharacter;
    }
}
