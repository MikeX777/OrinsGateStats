import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { TBPlayer } from './TBPlayer';

@Entity()
export class TBCampaign {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Name: string;

    @OneToMany(() => TBCharacter, (character) => character.Campaign)
    public Characters: TBCharacter[];

    @ManyToOne(() => TBPlayer, (player) => player.OwnedCampaigns)
    @JoinColumn({ name: 'DungeonMasterID' })
    public DungeonMaster: TBPlayer;

    @Column()
    @RelationId((Champaign: TBCampaign) => Champaign.DungeonMaster)
    public DungeonMasterID: number;

}
