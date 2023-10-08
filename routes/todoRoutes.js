const router = require("express").Router();
// Controllers
const {
  todoList,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoController");

// ----------------------------------------------------------- To Do -----------------------------------------------------------
// GET
// All TO DO LIST
router.route("/list").get(todoList);

// POST
// CREATE TO DO
router.route("/create").post(createToDo);

// PUT
// UPDATE TO DO
router.route("/update/:id").put(updateToDo);

// DELETE
// DELETE TO DO
router.route("/delete/:id").delete(deleteToDo);

module.exports = router;
