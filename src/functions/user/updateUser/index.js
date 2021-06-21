const userSchema = require("../../../db/mysql/userSchema");
const updateUser = async () => {
  try {
    const dbConn = await userSchema();
    const user = dbConn.findOne({ where: { name: testInput.name } });
    const update = await user.models.User.update({ name: testInput.name });

    if (!user) {
      console.log("must be valid user");
    }
    return update;
  } catch (e) {
    console.log(e);
  }
};

module.exports = updateUser;
