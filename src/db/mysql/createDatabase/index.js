const connection = require("../connection");

const createDatabase = async (database, returnNewConnection = false) => {
  const dbConn = connection();
  await dbConn.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
  if (returnNewConnection) {
    return connection(database);
  }
};

module.exports = createDatabase;
