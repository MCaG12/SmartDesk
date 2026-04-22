import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTicketCategory1776809871987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TICKETCATEGORY"(
                TICKCAT_ID SERIAL PRIMARY KEY,
                TICKCAT_DESCRIPTION TEXT NOT NULL
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TICKETCATEGORY"`);
    }

}
