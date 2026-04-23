import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTypePriority1776973820241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "TYPEPRIORITY"("TYPEPRI_DESCRIPTION") VALUES ('BAIXA PRIORIDADE'), ('MEDIA PRIORIDADE'), ('ALTA PRIORIDADE'), ('CRITICA PRIORIDADE')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
