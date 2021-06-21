const { database } = require("../../../databaseName");
const connection = require("../connection");
const dropDatabase = require("../dropDatabase");
const createDatabase = require("../createDatabase");
const connectionWithDb = async (bootstrap = false) => {
  if (bootstrap) {
    await dropDatabase(database);
    const response = await createDatabase(database, true);
    return response;
  }
  return connection(database);
};

module.exports = connectionWithDb;
