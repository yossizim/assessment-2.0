const connectionWithDb = require("../connectionWithDb");
const { DataTypes } = require("sequelize");

const monsterSchema = async (bootsrap = false) => {
  const dbConn = await connectionWithDb(bootstrap);

  dbConn.define("Monster", {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      required: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      required: true,
    },
    atk: {
      type: DataTypes.INTEGER,
      required: true,
    },
    def: {
      type: DataTypes.INTEGER,
      required: true,
    },
  });
  await dbConn.sync({ alter: true });
  return dbConn;
};

module.exports = monsterSchema;
