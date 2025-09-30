const taskRepository = require('../repositories/taskRepository');

class TaskService {
  getTasks() {
    return taskRepository.getAll();
  }

  createTask(title) {
    return taskRepository.create(title);
  }
}

module.exports = new TaskService();