import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBArmor } from './TBArmor';
import { TBCampaign } from './TBCampaign';
import { TBCharacterClass } from './TBCharacterClass';
import { TBCharacterFeat } from './TBCharacterFeat';
import { TBCharacterLanguage } from './TBCharacterLanguage';
import { TBCharacterPower } from './TBCharacterPower';
import { TBCharacterTrick } from './TBCharacterTrick';
import { TBPlayer } from './TBPlayer';
import { TBRace } from './TBRace';
import { TBShield } from './TBShield';

@Entity()
export class TBCharacter {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @Column()
    public Conscious: boolean;

    @Column()
    public Alive: boolean;

    @Column()
    public Stable: boolean;

    @Column()
    public MaxHealth: number;

    @Column()
    public CurrentHealth: number;

    @Column()
    public Strength: number;

    @Column()
    public Dexterity: number;

    @Column()
    public Constitution: number;

    @Column()
    public Intelligence: number;

    @Column()
    public Wisdom: number;

    @Column()
    public Charisma: number;

    @Column()
    public Speed: number;

    @Column()
    public Copper: number;

    @Column()
    public Silver: number;

    @Column()
    public Gold: number;

    @Column()
    public Platinum: number;

    @Column()
    public MaxHitDice: number;

    @Column()
    public CurrentHitDice: number;

    @Column()
    public Exhaustion: number;

    @ManyToOne(() => TBRace, (race) => race.Characters)
    @JoinColumn({ name: 'RaceID'})
    public Race: TBRace;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Race)
    public RaceID: number;

    @ManyToOne(() => TBCharacterClass, (characterClass) => characterClass.Characters)
    @JoinColumn({ name: 'CharacterClassID' })
    public CharacterClass: TBCharacterClass;

    @Column()
    @RelationId((Character: TBCharacter) => Character.CharacterClass)
    public CharacterClassID: number;

    @ManyToOne(() => TBCampaign, (campaign) => campaign.Characters)
    @JoinColumn({ name: 'CampaignID' })
    public Campaign: TBCampaign;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Campaign)
    public CampaignID: number;

    @ManyToOne(() => TBPlayer, (player) => player.Characters)
    @JoinColumn({ name: 'PlayerID' })
    public Player: TBPlayer;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Player)
    public PlayerID: number;

    @ManyToOne(() => TBArmor, (armor) => armor.Characters)
    @JoinColumn({ name: 'ArmorID' })
    public Armor: TBArmor;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Armor)
    public ArmorID: number;

    @ManyToOne(() => TBShield, (shield) => shield.Characters)
    @JoinColumn({ name: 'ShieldID' })
    public Shield: TBShield;

    @Column()
    @RelationId((Character: TBCharacter) => Character.Shield)
    public ShieldID: number;

    @OneToMany(() => TBCharacterLanguage, (characterLanguage) => characterLanguage.Character, { onDelete: 'CASCADE' })
    public CharacterLanguages: TBCharacterLanguage[];

    @OneToMany(() => TBCharacterFeat, (characterFeat) => characterFeat.Character, { onDelete: 'CASCADE' })
    public CharacterFeats: TBCharacterFeat[];

    @OneToMany(() => TBCharacterTrick, (characterTrick) => characterTrick.Character, { onDelete: 'CASCADE' })
    public CharacterTricks: TBCharacterTrick[];

    @OneToMany(() => TBCharacterPower, (characterPower) => characterPower.Character, { onDelete: 'CASCADE' })
    public CharacterPowers: TBCharacterPower[];
}
