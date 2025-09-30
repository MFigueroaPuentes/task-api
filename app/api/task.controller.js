const taskService = require('../services/taskService');
const { validateTaskTitle } = require('../util/validate');

// GET /tasks
function getTasks(req, res) {
  const tasks = taskService.getTasks();
  res.json(tasks);
}

// POST /tasks
function createTask(req, res) {
  const { title } = req.body;

  if (!validateTaskTitle(title)) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  const task = taskService.createTask(title.trim());
  res.status(201).json(task);
}

module.exports = {getTasks,createTask};
