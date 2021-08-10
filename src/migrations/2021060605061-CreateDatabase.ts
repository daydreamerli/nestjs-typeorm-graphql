import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase2021060605061 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('testcars', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('testcars', true);
  }
}
