const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//get all tasks
router.get("/", async (req, res) => {
const tasks = await Task.find();
res.json(tasks);
});

//create a task
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
});

//update a task
router.put("/:id", async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

//delete a task
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

module.exports = router;
