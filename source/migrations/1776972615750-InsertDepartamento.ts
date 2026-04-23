import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertDepartamento1776972615750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "DEPARTAMENTO" VALUES ('RECURSOS HUMANOS'), ('SUPORTE TECNICO'), ('ATENDIMENTO AO CLIENTE'), ('PROGRAMACAO');`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
