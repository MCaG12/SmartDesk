import { MigrationInterface, QueryRunner } from "typeorm";

export class TableDepartamento1776796646688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "DEPARTAMENTO" 
            (
                DEP_ID SERIAL PRIMARY KEY,
                DEP_NOMEDEPARTAMENTO VARCHAR(50) NOT NULL 
            )

      
       `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query(`DROP TABLE IF EXISTS "DEPARTAMENTO"`);
    }


}
