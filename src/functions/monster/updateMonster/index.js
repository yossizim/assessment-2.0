const monsterSchema = require("../../../db/mysql/monsterSchema ");
const updateMonster = async (testInput) => {
  try {
    const dbConn = monsterSchema();
    const monster = monster.findByPk({ where: { name: testInput.name } });
    const update = await dbConn.models.Monster.monster.update({
      name: testInput.name,
    });
    if (!monster) {
      console.log("must update valid monster");
    }
    return update;
  } catch (e) {
    console.log(e);
  }
};

module.exports = updateMonster;
