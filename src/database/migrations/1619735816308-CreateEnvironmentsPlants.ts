import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEnvironmentsPlants1619735816308
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plants_environments',
        columns: [
          {
            name: 'key',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plants_environments');
  }
}
