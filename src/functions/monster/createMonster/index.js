const monsterSchema = require("../../../db/mysql/monsterSchema ");
const createMonster = async () => {
  try {
    const dbConn = await monsterSchema();
    const createmonster = dbConn.mondels.Monster.build({
      name: testInput.name,
    });
    await createmonster.save();
    console.log(createmonster.toJSON());
    return createmonster;
  } catch (e) {
    console.log(e);
  }
};
module.exports = createMonster;
