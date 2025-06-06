const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

//get all tasks
router.get("/", auth ,async (req, res) => {
const tasks = await Task.find({ user: req.user.userId });
res.json(tasks);
});

//create a task
router.post("/", auth, async (req, res) => {
    const newTask = new Task({ ...req.body, user: req.user.userId });
    const savedTask = await newTask.save();
    res.json(savedTask);
});

//update a task
router.put("/:id", auth, async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.userId },
        req.body,
        { new: true }
    );
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
});

//delete a task
router.delete("/:id", auth, async (req, res) => {
    const result = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId });
    if (!result) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
});

module.exports = router;
