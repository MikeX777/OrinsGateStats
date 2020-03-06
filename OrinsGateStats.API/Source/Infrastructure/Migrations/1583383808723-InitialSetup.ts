import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialSetup1583383808723 implements MigrationInterface {
    name = 'InitialSetup1583383808723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_campaign_request" ("ID" SERIAL NOT NULL, "CharacterID" integer NOT NULL, "CampaignID" integer NOT NULL, CONSTRAINT "REL_a2a87649cc8451f7e0a046addb" UNIQUE ("CharacterID"), CONSTRAINT "PK_f81fb317549e60728812d71daae" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_player" ("ID" SERIAL NOT NULL, "Username" character varying NOT NULL, "Password" character varying NOT NULL, "Email" character varying NOT NULL, "FirstName" character varying NOT NULL, "LastName" character varying NOT NULL, CONSTRAINT "PK_82ff4f963753d8b86858e8031b3" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_campaign" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "DungeonMasterID" integer NOT NULL, CONSTRAINT "PK_c9b69978cb83cb8539b2b3a50e1" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_die" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Value" integer NOT NULL, CONSTRAINT "PK_d0bc838fbf17920a99b2c008148" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character_class" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "HitDieID" integer NOT NULL, CONSTRAINT "PK_3abe2d43f5aaeaa8eb47aef26cb" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_race" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, CONSTRAINT "PK_93038080ed38bb9e85ab1d986d3" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_race_bonus" ("ID" SERIAL NOT NULL, "RaceID" integer NOT NULL, "Bonus" integer NOT NULL, "StatTypeID" integer NOT NULL, CONSTRAINT "PK_df11ecbe5fd4d2ce9dc6ebe02e4" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_stat_type" ("ID" SERIAL NOT NULL, "Type" character varying NOT NULL, CONSTRAINT "PK_e08bb1bf3ce6f20ac36b635e4c8" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_feat_bonus" ("ID" SERIAL NOT NULL, "FeatID" integer NOT NULL, "Bonus" integer NOT NULL, "StatTypeID" integer NOT NULL, CONSTRAINT "PK_088ebc43bb6f38d71b91824a913" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_feat" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Text" character varying NOT NULL, CONSTRAINT "PK_cfe8ebfcd53838bf33723b4ef13" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character_feat" ("ID" SERIAL NOT NULL, "CharacterID" integer NOT NULL, "FeatID" integer NOT NULL, CONSTRAINT "PK_4bbd5b32bcc0be57e9a3c0d7196" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_language" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, CONSTRAINT "PK_f130896e8c0f20e4eef625ceaad" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character_language" ("ID" SERIAL NOT NULL, "CharacterID" integer NOT NULL, "LanguageID" integer NOT NULL, CONSTRAINT "PK_e4aa086d053b105b5da73018f79" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_power" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Level" integer NOT NULL, CONSTRAINT "PK_9ed0c7f811f5155ec4adb3ad6c6" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character_power" ("ID" SERIAL NOT NULL, "CharacterID" integer NOT NULL, "PowerID" integer NOT NULL, CONSTRAINT "PK_15e7ad6760dcdab8ff6428f2c5c" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_trick" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, CONSTRAINT "PK_9d7fd9c81bbe4f306d7488b6aac" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character_trick" ("ID" SERIAL NOT NULL, "CharacterID" integer NOT NULL, "TrickID" integer NOT NULL, CONSTRAINT "PK_e4ed8b916e8e8a3434718010d10" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_shield" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Bonus" integer NOT NULL, CONSTRAINT "PK_2ddf50ea476298126bf309b84bf" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_character" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Conscious" boolean NOT NULL, "Alive" boolean NOT NULL, "Stable" boolean NOT NULL, "MaxHealth" integer NOT NULL, "CurrentHealth" integer NOT NULL, "Strength" integer NOT NULL, "Dexterity" integer NOT NULL, "Constitution" integer NOT NULL, "Intelligence" integer NOT NULL, "Wisdom" integer NOT NULL, "Charisma" integer NOT NULL, "Speed" integer NOT NULL, "Copper" integer NOT NULL, "Silver" integer NOT NULL, "Gold" integer NOT NULL, "Platinum" integer NOT NULL, "MaxHitDice" integer NOT NULL, "CurrentHitDice" integer NOT NULL, "Exhaustion" integer NOT NULL, "RaceID" integer NOT NULL, "CharacterClassID" integer NOT NULL, "CampaignID" integer, "PlayerID" integer NOT NULL, "ArmorID" integer NOT NULL, "ShieldID" integer NOT NULL, CONSTRAINT "PK_7c9ecaf2f19ac5e5dced7ff22f6" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_armor" ("ID" SERIAL NOT NULL, "Name" character varying NOT NULL, "Bonus" integer NOT NULL, CONSTRAINT "PK_8e3e1922c2f4aa5643485304a7d" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tb_bonus" ("ID" SERIAL NOT NULL, "Modifier" integer NOT NULL, CONSTRAINT "PK_25e79869bc4d77aaa87780021c0" PRIMARY KEY ("ID"))`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign_request" ADD CONSTRAINT "FK_a2a87649cc8451f7e0a046addb5" FOREIGN KEY ("CharacterID") REFERENCES "tb_character"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign_request" ADD CONSTRAINT "FK_c2ab89ab3a5e54839da017bc0ea" FOREIGN KEY ("CampaignID") REFERENCES "tb_campaign"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign" ADD CONSTRAINT "FK_276763a910895d691d6d0740abe" FOREIGN KEY ("DungeonMasterID") REFERENCES "tb_player"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_class" ADD CONSTRAINT "FK_6593571022c7a76af83b0f57cdd" FOREIGN KEY ("HitDieID") REFERENCES "tb_die"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_race_bonus" ADD CONSTRAINT "FK_3a5db9ffb6d0383e62fdcd1bb8a" FOREIGN KEY ("RaceID") REFERENCES "tb_race"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_race_bonus" ADD CONSTRAINT "FK_ad00dd008c14c7951bf4ce1256f" FOREIGN KEY ("StatTypeID") REFERENCES "tb_stat_type"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_feat_bonus" ADD CONSTRAINT "FK_c4e6997a8770eb5ba3f46e6b084" FOREIGN KEY ("FeatID") REFERENCES "tb_feat"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_feat_bonus" ADD CONSTRAINT "FK_d9df95cff3fc708223b72859880" FOREIGN KEY ("StatTypeID") REFERENCES "tb_stat_type"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_feat" ADD CONSTRAINT "FK_3a92e8e9fd5e96234811075cb5f" FOREIGN KEY ("CharacterID") REFERENCES "tb_character"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_feat" ADD CONSTRAINT "FK_90a9e3f44fd73050e1f586ca4f6" FOREIGN KEY ("FeatID") REFERENCES "tb_feat"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_language" ADD CONSTRAINT "FK_0756891d27fec6718c6a2b1696f" FOREIGN KEY ("CharacterID") REFERENCES "tb_character"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_language" ADD CONSTRAINT "FK_28a6477c26284fa61053167af61" FOREIGN KEY ("LanguageID") REFERENCES "tb_language"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_power" ADD CONSTRAINT "FK_bdd6fe5ab761e562879be2abd4f" FOREIGN KEY ("CharacterID") REFERENCES "tb_character"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_power" ADD CONSTRAINT "FK_9e9cf60c712145e2850017974ef" FOREIGN KEY ("PowerID") REFERENCES "tb_power"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_trick" ADD CONSTRAINT "FK_c764f554307c165d127faf5404f" FOREIGN KEY ("CharacterID") REFERENCES "tb_character"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_trick" ADD CONSTRAINT "FK_078d24e55584925d532177f4cd4" FOREIGN KEY ("TrickID") REFERENCES "tb_trick"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_f5c38f1fd402416326ff81166c5" FOREIGN KEY ("RaceID") REFERENCES "tb_race"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_5420a479b1be0591658451c0bc5" FOREIGN KEY ("CharacterClassID") REFERENCES "tb_character_class"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_fd2cda8e29560eeca2e5a71f4a0" FOREIGN KEY ("CampaignID") REFERENCES "tb_campaign"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_2013aeb4f6673e99d9ff8687e35" FOREIGN KEY ("PlayerID") REFERENCES "tb_player"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_e59c79057da7e408e8292ede212" FOREIGN KEY ("ArmorID") REFERENCES "tb_armor"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" ADD CONSTRAINT "FK_22a21f73c6731c5592a88587c77" FOREIGN KEY ("ShieldID") REFERENCES "tb_shield"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`INSERT INTO tb_stat_type ("Type") VALUES ('Strength'), ('Dexterity'), ('Constitution'), ('Intelligence'), ('Wisdom'), ('Charisma');`, undefined);
        await queryRunner.query(`INSERT INTO tb_die ("Name", "Value") VALUES ('D4', 4), ('D6', 6), ('D8', 8), ('D10', 10), ('D12', 12), ('D20', 20), ('Percentile', 100);`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_22a21f73c6731c5592a88587c77"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_e59c79057da7e408e8292ede212"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_2013aeb4f6673e99d9ff8687e35"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_fd2cda8e29560eeca2e5a71f4a0"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_5420a479b1be0591658451c0bc5"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character" DROP CONSTRAINT "FK_f5c38f1fd402416326ff81166c5"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_trick" DROP CONSTRAINT "FK_078d24e55584925d532177f4cd4"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_trick" DROP CONSTRAINT "FK_c764f554307c165d127faf5404f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_power" DROP CONSTRAINT "FK_9e9cf60c712145e2850017974ef"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_power" DROP CONSTRAINT "FK_bdd6fe5ab761e562879be2abd4f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_language" DROP CONSTRAINT "FK_28a6477c26284fa61053167af61"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_language" DROP CONSTRAINT "FK_0756891d27fec6718c6a2b1696f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_feat" DROP CONSTRAINT "FK_90a9e3f44fd73050e1f586ca4f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_feat" DROP CONSTRAINT "FK_3a92e8e9fd5e96234811075cb5f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_feat_bonus" DROP CONSTRAINT "FK_d9df95cff3fc708223b72859880"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_feat_bonus" DROP CONSTRAINT "FK_c4e6997a8770eb5ba3f46e6b084"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_race_bonus" DROP CONSTRAINT "FK_ad00dd008c14c7951bf4ce1256f"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_race_bonus" DROP CONSTRAINT "FK_3a5db9ffb6d0383e62fdcd1bb8a"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_character_class" DROP CONSTRAINT "FK_6593571022c7a76af83b0f57cdd"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign" DROP CONSTRAINT "FK_276763a910895d691d6d0740abe"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign_request" DROP CONSTRAINT "FK_c2ab89ab3a5e54839da017bc0ea"`, undefined);
        await queryRunner.query(`ALTER TABLE "tb_campaign_request" DROP CONSTRAINT "FK_a2a87649cc8451f7e0a046addb5"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_bonus"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_armor"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_shield"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character_trick"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_trick"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character_power"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_power"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character_language"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_language"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character_feat"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_feat"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_feat_bonus"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_stat_type"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_race_bonus"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_race"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_character_class"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_die"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_campaign"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_player"`, undefined);
        await queryRunner.query(`DROP TABLE "tb_campaign_request"`, undefined);
    }

}
