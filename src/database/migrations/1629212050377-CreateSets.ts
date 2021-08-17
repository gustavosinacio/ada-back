import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSets1629212050377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'session_name',
            type: 'varchar',
          },
          {
            name: 'exercise_name',
            type: 'varchar',
          },
          {
            name: 'set_order',
            type: 'integer',
          },
          {
            name: 'weight_kg',
            type: 'float',
          },
          {
            name: 'reps',
            type: 'integer',
          },
          {
            name: 'rpe',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'distance_meters',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'seconds',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sets');
  }
}
