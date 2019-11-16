import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany, BeforeInsert } from 'typeorm';
import { TBCharacter } from './TBCharacter';
import { IsEmail } from 'class-validator';
import { genSalt, hash } from 'bcrypt';
const SALT_COST = 16;

@Entity()
export class TBPlayer {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @Column()
    @IsEmail()
    Email: string;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @OneToMany(() => TBCharacter, character => character.Player)
    Characters: TBCharacter[];

    @BeforeInsert()
    async SetPassword() {
        const salt = await genSalt(SALT_COST);
        this.Password = await hash(this.Password, salt); 
    }

}