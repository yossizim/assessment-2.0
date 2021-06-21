const {
  mysql: { connectionWithDb },
} = require("./db");
const { createUser, updateUser } = require("./functions/user");
const {
  createMonster,
  updateMonster,
  growMonster,
  fight,
} = require("./functions/monster");
const user = require("./functions/user");
let user1;
let monster1;

const testCreateUser = async () => {
  const testInput = {
    name: "Charles Jackson",
  };
  user1 = await createUser(testInput);
  const test = user1.name === testInput.name;
  console.log(`CREATE USER: ${test}`);
};
const testUpdateUser = async () => {
  const testInput = {
    id: user1.name,
    name: "Lord Charles Jackson",
  };
  user1 = await user.updateUser(testInput);
  const test = user1.name === testInput.name;
  console.log("update user", test);
};

const runTest = async () => {
  console.log("start test");
  await connectionWithDb(true);
  await testCreateUser();
  await testUpdateUser();
  //etc
};

runTest();
