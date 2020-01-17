import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { TBCampaign } from './TBCampaign';
import { TBCharacter } from './TBCharacter';

@Entity()
export class TBCampaignRequest {

    @PrimaryGeneratedColumn()
    public ID: number;

    @OneToOne(() => TBCharacter, (character) => character.CampaignRequest)
    @JoinColumn({ name: 'CharacterID'})
    public Character: TBCharacter;

    @Column()
    @RelationId((CampaignRequest: TBCampaignRequest) => CampaignRequest.Character)
    public CharacterID: number;

    @ManyToOne(() => TBCampaign, (campaign) => campaign.RequestedCharacters)
    @JoinColumn({ name: 'CampaignID' })
    public Campaign: TBCampaign;

    @Column()
    @RelationId((CampaignRequest: TBCampaignRequest) => CampaignRequest.Campaign)
    public CampaignID: number;
}
