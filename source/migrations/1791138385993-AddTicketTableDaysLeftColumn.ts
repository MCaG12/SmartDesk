import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTicketTableDaysLeftColumn1791138385993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "TICKET"
            ADD COLUMN "TICKET_DAYSLEFT" integer NOT NULL DEFAULT 0;
        `);

        await queryRunner.query(`
            UPDATE "TICKET"
            SET "TICKET_DAYSLEFT" = CASE "TICKET_PRIORITY"
                WHEN 1 THEN 4
                WHEN 2 THEN 3
                WHEN 3 THEN 2
                WHEN 4 THEN 1
                ELSE "TICKET_DAYSLEFT"
            END;
        `);
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "TICKET"
            DROP COLUMN "TICKET_DAYSLEFT";
        `);
    }

}
