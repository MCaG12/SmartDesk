import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTicketStatus1776809763589 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TICKETSTATUS"(
                TICKSTA_ID SERIAL PRIMARY KEY,
                TICKSTA_DESCRIPTION TEXT NOT NULL
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TICKETSTATUS"`);
    }

}
