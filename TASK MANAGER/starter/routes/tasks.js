const express = require("express");

const app = express();

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

//Mddleware
app.use(express.json());



// router.route('/').get((req,res)=>{
//     res.send('all items')
// })

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(
  updateTask).delete(deleteTask);

module.exports = router;
