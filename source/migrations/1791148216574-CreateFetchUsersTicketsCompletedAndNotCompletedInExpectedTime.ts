import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFetchUsersTicketsCompletedAndNotCompletedInExpectedTime1791148216574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE OR REPLACE FUNCTION ticket_counts(p_agent_id integer)
      RETURNS TABLE (completed_in_time integer, not_completed_in_time integer)
      LANGUAGE plpgsql AS $$
      DECLARE
          foundRecord record;
      BEGIN
          completed_in_time := 0;
          not_completed_in_time := 0;

          FOR foundRecord IN
              SELECT * FROM "TICKET" WHERE "TICKET_AGENT" = p_agent_id
          LOOP
              IF foundRecord."TICKET_DATECLOSE" IS NOT NULL THEN
                  IF foundRecord."TICKET_DATECLOSE"::date - foundRecord."TICKET_DATEOPEN"::date
                         <= foundRecord."TICKET_DAYSLEFT" THEN
                      completed_in_time := completed_in_time + 1;
                  ELSE
                      not_completed_in_time := not_completed_in_time + 1;
                  END IF;
              ELSE
                  not_completed_in_time := not_completed_in_time + 1;
              END IF;
          END LOOP;

          RETURN NEXT;
      END
      $$;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP FUNCTION IF EXISTS ticket_counts(integer);`);
  }

}
