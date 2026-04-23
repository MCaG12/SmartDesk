import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTicketCategory1776973567724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "TICKETCATEGORY"("TICKCAT_DESCRIPTION") VALUES ('Hardware'), ('Software'), ('Rede'), ('Acesso Permissao'), ('Email'), ('Erro no Sistema'), ('Impressora'), ('Outros')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
