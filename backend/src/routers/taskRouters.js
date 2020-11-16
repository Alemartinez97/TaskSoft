const express = require("express");
const router = express.Router();
const app = express();
const { Task } = require("../models/Task");
router.get("/api/task", async (req, res) => {
  const task = await Task.find();
  res.send(task);
});
router.post("/api/task", async (req, res) => {
  try {
    const { taskname, description, state, responsable } = req.body;
    const task = new Task({
      taskname,
      description,
      state,
      responsable,
    });

    let newTask = await task.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ mensaje: "Error desconcido, Contactarse con soporte" });
  }
});

router.put("/api/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { taskname, description, state, responsable } = req.body;

    let task = await Task.findById(id);

    if (!task) {
      res.status(404).send({ mensaje: "La tarea con id = ${id}" });
      return;
    }

    if (taskname) {
      task.taskname = taskname;
    }

    if (description) {
      task.description = description;
    }

    if (state) {
      task.state = state;
    }

    if (responsable) {
      task.responsable = responsable;
    }

    task.date = new Date();

    task.save();

    res.status(200).send(task);
  } catch (err) {
    console.error(err);
    res.status(500).send({ mensaje: "Error desconocido" });
  }
});
router.delete("/api/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let task = await Task.deleteOne({ _id: id });

    if (!task) {
      res.status(404).send({ mensaje: "La tarea con id = ${id}" });
      return;
    }
    res.status(200).send(task);
  } catch (err) {
    console.error(err);
    res.status(500).send({ mensaje: "Error desconocido" });
  }
});

module.exports = router;
