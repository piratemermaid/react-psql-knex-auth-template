const { DB } = require("./secrets");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB.DEV.host,
      user: DB.DEV.user,
      password: DB.DEV.password,
      database: DB.DEV.database,
      charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: DB.PROD.host,
      user: DB.PROD.user,
      password: DB.PROD.password,
      database: DB.PROD.database,
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
