const casual = require("casual");
const monsterSchema = require("../../../db/mysql/monsterSchema ");

const growMonster = async (id) => {
  try {
    dbConn = await monsterSchema();
    const monster = await findOne(dbConn.model.Monster.id);
    const newData = {
      ...monster,
      hp: monster.hp + casual.integer(1, 5),
      atk: monster.atk + casual.integer(1, 5),
      def: monster.def + casual.integer(1, 5),
    };
    const res = await dbConn.mondel.Monster.create(newData);
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = growMonster;
