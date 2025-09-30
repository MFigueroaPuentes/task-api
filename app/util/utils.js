function validateTaskTitle(title) {
  return typeof title === 'string' && title.trim() !== '';
}

module.exports = { validateTaskTitle };
