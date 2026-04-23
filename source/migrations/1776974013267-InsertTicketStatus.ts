import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTicketStatus1776974013267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "TICKETSTATUS"("TICKSTA_DESCRIPTION") VALUES ('NOVO TICKET'), ('EM ANDAMENTO'), ('PARADO'), ('AGUARDANDO RESPOSTA'), ('FINALIZADO')
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
