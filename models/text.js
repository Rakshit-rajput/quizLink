const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Task", TextSchema);
