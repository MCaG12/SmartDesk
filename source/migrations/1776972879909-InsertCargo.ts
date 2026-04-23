import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCargo1776972879909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            DO $$
            DECLARE
                DEP_CODE INTEGER;
            BEGIN
                SELECT "DEP_ID" INTO DEP_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'RECURSOS HUMANOS';
                INSERT INTO "CARGO" ("CAR_NOME", "CAR_DEPARTAMENTOID") VALUES 
                ('ANALISTA DE RH', DEP_CODE), ('RECRUTADOR', DEP_CODE), ('GERENTE DE RH', DEP_CODE), ('ASSISTENTE DE RH', DEP_CODE);

                SELECT "DEP_ID"  INTO DEP_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'SUPORTE TECNICO';
                INSERT INTO "CARGO" ("CAR_NOME", "CAR_DEPARTAMENTOID") VALUES 
                ('TECNICO DE TI', DEP_CODE), ('ANALISTA DE SUPORTE', DEP_CODE), ('HELPDESK', DEP_CODE), ('COORDENADOR DE TI', DEP_CODE);

                SELECT "DEP_ID"  INTO DEP_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'ATENDIMENTO AO CLIENTE';
                INSERT INTO "CARGO" ("CAR_NOME", "CAR_DEPARTAMENTOID") VALUES 
                ('ATENDENTE', DEP_CODE), ('SUPERVISOR DE ATENDIMENTO', DEP_CODE), ('ANALISTA DE SAC', DEP_CODE), ('GERENTE DE ATENDIMENTO', DEP_CODE);

                SELECT "DEP_ID"  INTO DEP_CODE FROM "DEPARTAMENTO" WHERE "DEP_NOMEDEPARTAMENTO" = 'PROGRAMACAO';
                INSERT INTO "CARGO" ("CAR_NOME", "CAR_DEPARTAMENTOID") VALUES 
                ('DESENVOLVEDOR JUNIOR', DEP_CODE), ('DESENVOLVEDOR PLENO', DEP_CODE), ('DESENVOLVEDOR SENIOR', DEP_CODE), ('TECH LEAD', DEP_CODE), ('ARQUITETO DE SOFTWARE', DEP_CODE);
            END;
            $$;
            `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
