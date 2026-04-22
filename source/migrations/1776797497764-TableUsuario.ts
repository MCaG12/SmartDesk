import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUsuario1776797497764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query
        (`
            CREATE TABLE IF NOT EXISTS "USUARIO" (
                USUAR_ID SERIAL PRIMARY KEY,
                USUAR_NOME VARCHAR(100),
                USUAR_EMAIL VARCHAR(50),
                USUAR_SENHA VARCHAR(50),
                USUAR_CARGO INTEGER NOT NULL REFERENCES "CARGO"(CAR_ID),
                USUAR_DEPARTAMENTO INTEGER NOT NULL REFERENCES "DEPARTAMENTO"(DEP_ID),
                USUAR_TIPOUSUARIO INTEGER NOT NULL REFERENCES "TIPOUSUARIO"(TIPUSU_ID)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "USUARIO"`);
    }

}
