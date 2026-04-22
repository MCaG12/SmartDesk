import { MigrationInterface, QueryRunner } from "typeorm";

export class TableTipoUsuario1776796952779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "TIPOUSUARIO" (
                TIPUSU_ID SERIAL PRIMARY KEY,
                TIPUSU_DESCRICAO VARCHAR(50)
            )
        `)
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "TIPOUSUARIO"`);
    }

}
