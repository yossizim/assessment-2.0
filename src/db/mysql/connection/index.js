//const database = require("../../../databaseName").default;
const { Sequelize } = require("sequelize");

const connection = (database) => {
  const sequelize = new Sequelize({
    username: "root",
    password: "dap123",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    ...(database ? { database } : {}),
    logging: false,
  });
  return sequelize;
};

module.exports = connection;
