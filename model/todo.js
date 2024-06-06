const mongoose = require("mongoose");

const todoTaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    default: "Low",
  },
  dueDate: {
    type: Date,
  },
});

const todo = mongoose.model("Todo", todoTaskSchema);

module.exports = todo;
