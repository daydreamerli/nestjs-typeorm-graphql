import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase2021060605061 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('greatcars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('greatcars', true);
  }
}
