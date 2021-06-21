const userSchema = require("../../../db/mysql/userSchema");

const createUser = async (testInput) => {
  try {
    const dbConn = await userSchema();
    const user = await dbConn.models.User.build({ name: testInput.name });
    await user.save();
    console.log(user);
    return user;
  } catch (e) {
    console.log(e);
  }
};

module.exports = createUser;
