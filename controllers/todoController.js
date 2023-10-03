// External Modules
const asyncHandler = require("express-async-handler");
// Model
const todoModel = require("../models/todoModel");

// ----------------------------------------------------------- To Do -----------------------------------------------------------

// GET
// To Do List
exports.todoList = asyncHandler(async (req, res) => {
  const todolist = await todoModel.find();
  if (todolist.length === 0) {
    res.status(404);
    throw new Error("No To Do items Found");
  }
  res.status(200).json(todolist);
});
