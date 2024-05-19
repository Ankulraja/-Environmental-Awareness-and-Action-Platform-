const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InitiativeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Initiative", InitiativeSchema);
