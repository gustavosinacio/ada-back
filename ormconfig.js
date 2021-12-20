module.exports = {
  type: process.env.DB_TYPE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
  database: process.env.PSQL_DATABASE,
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/modules/*/entities/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
