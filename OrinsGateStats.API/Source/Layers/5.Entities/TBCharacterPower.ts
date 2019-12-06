import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBPower } from './TBPower';

@Entity()
export class TBCharacterPower {

    @PrimaryGeneratedColumn()
    public ID: number;

    @ManyToOne(() => TBCharacter, (character) => character.CharacterPowers)
    @JoinColumn({ name: 'CharacterID' })
    public Character: TBCharacter;

    @Column()
    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Character)
    public CharacterID: number;

    @ManyToOne(() => TBPower, (power) => power.CharacterPowers)
    @JoinColumn({ name: 'PowerID' })
    public Power: TBPower;

    @Column()
    @RelationId((CharacterPower: TBCharacterPower) => CharacterPower.Power)
    public PowerID: number;
}
