import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTicketCompletedTrigger1791219601380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION save_date_ticket_completed()
            RETURNS TRIGGER AS $$
            BEGIN
                IF NEW."TICKET_STATUS" = 5 THEN
                    UPDATE "TICKET"
                    SET "TICKET_DATECLOSE" = now()
                    WHERE "TICKET_ID" = NEW."TICKET_ID";
                END IF;

                RETURN NULL;
            END;
            $$ LANGUAGE plpgsql;
        `);

        await queryRunner.query(`
            CREATE TRIGGER trg_save_date_ticket_completed
            AFTER UPDATE OF "TICKET_STATUS" ON "TICKET"
            FOR EACH ROW
            EXECUTE FUNCTION save_date_ticket_completed();
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TRIGGER IF EXISTS trg_save_date_ticket_completed ON "TICKET";
        `);

        await queryRunner.query(`
            DROP FUNCTION IF EXISTS save_date_ticket_completed();
        `);
    }

}
