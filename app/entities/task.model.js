class Task {
  constructor({ id , title, completed = false, createdAt, updatedAt }) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Task;