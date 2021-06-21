const createRow = async (model, input) => {
  const createdrow = await model.create(input);
  return createdrow;
};
module.exports = createRow;
