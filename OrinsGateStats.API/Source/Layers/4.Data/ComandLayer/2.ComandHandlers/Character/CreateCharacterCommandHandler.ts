import { getRepository } from 'typeorm';
import { CommandHandlerBase } from '../../../../../Infrastructure/BaseClasses/CommandHandlerBase';
import { TBCharacter } from '../../../../5.Entities/TBCharacter';
import { TBCharacterFeat } from '../../../../5.Entities/TBCharacterFeat';
import { TBCharacterLanguage } from '../../../../5.Entities/TBCharacterLanguage';
import { TBCharacterPower } from '../../../../5.Entities/TBCharacterPower';
import { TBCharacterTrick } from '../../../../5.Entities/TBCharacterTrick';
import { TBPlayer } from '../../../../5.Entities/TBPlayer';
import { CreateCharacterCommand } from '../../1.Commands/Character/CreateCharacterCommand';

export class CreateCharacterCommandHandler implements CommandHandlerBase<CreateCharacterCommand> {
    public async Execute(command: CreateCharacterCommand): Promise<any> {
        const playerRepository = getRepository(TBPlayer);

        const playerExists = await playerRepository.findOne({where: { ID: command.PlayerID }});

        if (playerExists === undefined) {
            return -1;
        }

        const characterRepository = getRepository(TBCharacter);

        const newCharacter = characterRepository.create({
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
            Speed: command.Speed,
            Copper: command.Copper,
            Silver: command.Silver,
            Gold: command.Gold,
            Platinum: command.Platinum,
            MaxHitDice: command.MaxHitDice,
            CurrentHitDice: command.CurrentHitDice,
            Exhaustion: command.Exhaustion,
            PlayerID: command.PlayerID,
            RaceID: command.RaceID,
            CharacterClassID: command.CharacterClassID,
            CampaignID: command.CampaignID,
            ArmorID: command.ArmorID,
            ShieldID: command.ShieldID,
        });

        await characterRepository.save(newCharacter);

        const languageRepository = getRepository(TBCharacterLanguage);
        const featRepository = getRepository(TBCharacterFeat);
        const trickRepository = getRepository(TBCharacterTrick);
        const powerRepository = getRepository(TBCharacterPower);

        command.LanguageIDs.forEach((id) => {
            const characterLanguage = languageRepository.create({
                CharacterID: newCharacter.ID,
                LanguageID: id,
            });
            languageRepository.save(characterLanguage);
        });

        command.FeatIDs.forEach((id) => {
            const characterFeat = featRepository.create({
                CharacterID: newCharacter.ID,
                FeatID: id,
            });
            featRepository.save(characterFeat);
        });

        command.TrickIDs.forEach((id) => {
            const characterTrick = trickRepository.create({
                CharacterID: newCharacter.ID,
                TrickID: id,
            });
            trickRepository.save(characterTrick);
        });

        command.PowerIDs.forEach((id) => {
            const characterPower = powerRepository.create({
                CharacterID: newCharacter.ID,
                PowerID: id,
            });
            powerRepository.save(characterPower);
        });

        return newCharacter;
    }
}
