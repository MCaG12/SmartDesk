import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTypePriority1776809847407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TYPEPRIORITY"(
                TYPEPRI_ID SERIAL PRIMARY KEY,
                TYPEPRI_DESCRIPTION TEXT NOT NULL
            )
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TYPEPRIORITY"`);
    }

}
