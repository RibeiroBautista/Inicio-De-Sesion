const knex = require('knex');

const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "coderproject",
  },
  pool: { min: 0, max: 7 },
};
const configSQLite3 = {
  client: "sqlite3",
  connection: { filename: "./src/db/chatSql/chats.sqlite" },
  useNullAsDefault: true
};

const mongoConnection = ``;//<---- Ingrese base de datos de mongo dentro de las comillas porfavor
const mysqlConnection = knex(config);
const sqliteConnection = knex(configSQLite3);

module.exports = {mysqlConnection, sqliteConnection, mongoConnection};