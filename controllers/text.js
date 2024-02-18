const Text = require("../models/text");

const getText = async (req, res) => {
  try {
    const text = await Text.find({});
    res.status(200).json({ text: text });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createText = async (req, res) => {
  try {
    const text = await Text.create(req.body);
    res.status(201).json({ text });
  } catch (error) {
    res.status(500).json({ msg: `something went wrong please try again` });
  }
};
module.exports = {
  getText,
  createText,
};
