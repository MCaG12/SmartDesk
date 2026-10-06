import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTicketDaysLeftTrigger1791138426337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION set_ticket_daysleft()
            RETURNS TRIGGER AS $$
            DECLARE
                v_priority INT;
            BEGIN
                v_priority := NEW."TICKET_PRIORITY";

                CASE v_priority
                    WHEN 1 THEN NEW."TICKET_DAYSLEFT" := 4;
                    WHEN 2 THEN NEW."TICKET_DAYSLEFT" := 3;
                    WHEN 3 THEN NEW."TICKET_DAYSLEFT" := 2;
                    ELSE NEW."TICKET_DAYSLEFT" := 1;
                END CASE;

                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
        `);

        await queryRunner.query(`
            CREATE TRIGGER set_ticket_daysleft
            BEFORE INSERT ON "TICKET"
            FOR EACH ROW
            EXECUTE FUNCTION set_ticket_daysleft();
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TRIGGER IF EXISTS set_ticket_daysleft ON "TICKET";`
        );
        await queryRunner.query(
            `DROP FUNCTION IF EXISTS set_ticket_daysleft();`
        );
    }

}
