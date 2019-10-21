const dotenv = require('dotenv')
dotenv.config()

const database = {
  client: 'sqlite3',
  connection: {
    filename: `${__dirname}/${process.env.DB_PATH_DEV}`
  },
  useNullAsDefault: true,
  migrations: {
    directory: 'build/db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: 'build/db/seeds'
  },
} 

module.exports = database
