import { MigrationInterface, QueryRunner } from "typeorm";

export class TableCargo1776796857493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "CARGO" (
                CAR_ID SERIAL PRIMARY KEY,
                CAR_NOME VARCHAR(50) NOT NULL,
                CAR_DEPARTAMENTOID INTEGER NOT NULL REFERENCES "DEPARTAMENTO"(DEP_ID)
            )  
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "CARGO"`);
    }

}
