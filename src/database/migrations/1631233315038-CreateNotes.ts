import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNotes1631233315038 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'text',
            type: 'varchar',
          },
          {
            name: 'order',
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
          {
            name: 'set_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'exercise_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'session_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKSetNote',
            referencedTableName: 'sets',
            referencedColumnNames: ['id'],
            columnNames: ['set_id'],
            onDelete: 'SET NULL',
          },
          {
            name: 'FKExerciseNote',
            referencedTableName: 'exercises',
            referencedColumnNames: ['id'],
            columnNames: ['exercise_id'],
            onDelete: 'SET NULL',
          },
          {
            name: 'FKSessionNote',
            referencedTableName: 'sessions',
            referencedColumnNames: ['id'],
            columnNames: ['session_id'],
            onDelete: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('notes');
  }
}
