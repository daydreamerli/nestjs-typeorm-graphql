import {MigrationInterface, QueryRunner} from "typeorm";

export class createrelations1629784745133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase('greatcars', true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createDatabase('greatcars', true);
    }

}
