import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTicket1776810962908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TICKET"(
                TICKET_ID SERIAL PRIMARY KEY,
                TICKET_TITLE TEXT NOT NULL,
                TICKET_STATUS INTEGER  REFERENCES "TICKETSTATUS"(TICKSTA_ID),
                TICKET_PRIORITY INTEGER REFERENCES "TYPEPRIORITY"(TYPEPRI_ID),
                TICKET_DESCRIPTION TEXT NOT NULL,
                TICKET_CATEGORY INTEGER REFERENCES "TICKETCATEGORY"(TICKCAT_ID),
                TICKET_DATEOPEN TIMESTAMP NOT NULL,
                TICKET_DATECLOSE TIMESTAMP,
                TICKET_SOLICITANT INTEGER REFERENCES "USUARIO"(USUAR_ID),
                TICKET_AGENT INTEGER REFERENCES "USUARIO"(USUAR_ID)
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TICKET"`);
    }

}
