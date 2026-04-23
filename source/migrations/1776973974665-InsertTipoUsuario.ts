import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTipoUsuario1776973974665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "TIPOUSUARIO"("TIPUSU_DESCRICAO") VALUES ('CLIENTE'), ('FUNCIONARIO'), ('GERENTE'), ('DIRETOR'), ('ADMINISTRADOR')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
