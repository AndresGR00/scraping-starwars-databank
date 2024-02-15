const insertManyData = async (Model, data, res) => {
  try {
    const cleanedData = data.map((item) => {
      return {
        name: item.name.replace(/\"/g, "").trim(),
        img: item.img.trim(),
        detail: item.detail.trim(),
      };
    });
    await Model.insertMany(cleanedData);
    return res
      .status(201)
      .json(`All ${Model.modelName} uploaded to the database`);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllData = async (Model, res) => {
  try {
    const allData = await Model.find();
    return res.status(200).json(allData);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { insertManyData, getAllData };
