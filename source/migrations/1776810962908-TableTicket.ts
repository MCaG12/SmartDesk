import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTicket1776811110822 implements MigrationInterface {

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
                TICKET_DATEOPEN DATETIME NOT NULL,
                TICKET_DATECLOSE DATETIME,
                TICKET_SOLICITANT ID REFERENCES "USUARIO"(USUAR_ID),
                TICKET_AGENT ID REFERENCES "USUARIO"(USUAR_ID),
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TICKET"`);
    }

}
