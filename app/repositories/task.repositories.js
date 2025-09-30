const Task = require('../entities/task');

class TaskRepository {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

getAll() {
    return this.tasks;    
  }

create(title) {
    const now = new Date().toISOString();
    const task = new Task({
      id: this.nextId++,
      title,
      completed: false,
      createdAt: now,
      updatedAt: now
    });
    this.tasks.push(task);


    return task;
  }
}

module.exports = new TaskRepository();