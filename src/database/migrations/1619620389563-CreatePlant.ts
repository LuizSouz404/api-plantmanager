import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlant1619620389563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'plants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'about',
            type: 'varchar',
          },
          {
            name: 'water_tips',
            type: 'varchar',
          },
          {
            name: 'photo',
            type: 'varchar',
          },
          {
            name: 'environment',
            type: 'varchar',
          },
          {
            name: 'frequency',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('plants');
  }
}
