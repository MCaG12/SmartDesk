import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertUsers1776974690679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DO $$
            DECLARE
                CARGO_CODE INTEGER;
                DEPARTAMENTO_CODE INTEGER;
                TIPOUSUARIO_CODE INTEGER;
            BEGIN
                SELECT "DEP_ID" INTO DEPARTAMENTO_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'SUPORTE TECNICO';
                SELECT "CAR_ID" INTO CARGO_CODE FROM "CARGO" WHERE "CAR_NOME" = 'HELPDESK';
                SELECT "TIPUSU_ID" INTO TIPOUSUARIO_CODE FROM "TIPOUSUARIO" WHERE "TIPUSU_DESCRICAO" = 'FUNCIONARIO';

                INSERT INTO "USUARIO"("USUAR_NOME", "USUAR_EMAIL", "USUAR_SENHA", "USUAR_CARGO", "USUAR_DEPARTAMENTO", "USUAR_TIPOUSUARIO") VALUES 
                                     ('TESTE', 'TESTE@EMAIL', '123', CARGO_CODE, DEPARTAMENTO_CODE, TIPOUSUARIO_CODE);

                SELECT "DEP_ID" INTO DEPARTAMENTO_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'ATENDIMENTO AO CLIENTE';
                SELECT "CAR_ID" INTO CARGO_CODE FROM "CARGO" WHERE "CAR_NOME" = 'ATENDENTE';
                SELECT "TIPUSU_ID" INTO TIPOUSUARIO_CODE FROM "TIPOUSUARIO" WHERE "TIPUSU_DESCRICAO" = 'FUNCIONARIO';

                INSERT INTO "USUARIO"("USUAR_NOME", "USUAR_EMAIL", "USUAR_SENHA", "USUAR_CARGO", "USUAR_DEPARTAMENTO", "USUAR_TIPOUSUARIO") VALUES 
                                    ('TESTE2', 'TESTE2@EMAIL', '123', CARGO_CODE, DEPARTAMENTO_CODE, TIPOUSUARIO_CODE);
            END
            $$;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
