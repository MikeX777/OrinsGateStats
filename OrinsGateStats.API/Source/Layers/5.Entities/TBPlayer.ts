import { genSalt, hash } from 'bcrypt';
import { IsEmail } from 'class-validator';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TBCampaign } from './TBCampaign';
import { TBCharacter } from './TBCharacter';
const SALT_COST = 16;

@Entity()
export class TBPlayer {

    @PrimaryGeneratedColumn()
    public ID: number;

    @Column()
    public Username: string;

    @Column()
    public Password: string;

    @Column()
    @IsEmail()
    public Email: string;

    @Column()
    public FirstName: string;

    @Column()
    public LastName: string;

    @OneToMany(() => TBCharacter, (character) => character.Player, { onDelete: 'CASCADE' })
    public Characters: TBCharacter[];

    @OneToMany(() => TBCampaign, (campaign) => campaign.DungeonMaster)
    public OwnedCampaigns: TBCampaign[];

    @BeforeInsert()
    public async SetPassword() {
        const salt = await genSalt(SALT_COST);
        this.Password = await hash(this.Password, salt);
    }

}
