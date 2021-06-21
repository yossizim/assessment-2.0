const connectionWithDb = require("../connectionWithDb");
const { DataTypes } = require("sequelize");
const userSchema = async (bootstrap = false) => {
  const dbConn = await connectionWithDb(bootstrap);

  dbConn.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      _id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        required: true,
        autoIncrement: true,
      },
    },
    {
      tableName: "User",
      updatedAt: "updated",
      createdAt: "created",
    }
  );
  await dbConn.sync({ alter: true });
  return dbConn;
};

module.exports = userSchema;
