import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTicketComment1776810962908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
         await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TICKETCOMMENT"(
                TICKCOM_ID SERIAL PRIMARY KEY,
                TICKCOM_COMMENT TEXT NOT NULL,
                TICKCOM_TICKETID INTEGER REFERENCES "TICKET"(TICKET_ID)
                TICKCOM_USERID INTEGER REFERENCES "USUARIO"(USUAR_ID)
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TICKETCOMMENT"`);
    }

}
