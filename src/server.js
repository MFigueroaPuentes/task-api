
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const tasks = [];
const nowISO = () => new Date().toISOString();
const makeId = () => String(Date.now()) + Math.random().toString(16).slice(2);

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res, next) => {
  try {
    const { title, completed = false } = req.body || {};
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      const err = new Error('title es obligatorio'); err.status = 400; err.code = 'VALIDATION_ERROR'; throw err;
    }
    const task = { id: makeId(), title: title.trim(), completed: Boolean(completed), createdAt: nowISO(), updatedAt: nowISO() };
    tasks.push(task);
    res.status(201).json(task);
  } catch (e) { next(e); }
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'No existe' } });
  res.json(task);
});

app.patch('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'No existe' } });
  const { title, completed } = req.body || {};
  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'title inválido' } });
    }
    task.title = title.trim();
  }
  if (completed !== undefined) task.completed = Boolean(completed);
  task.updatedAt = nowISO();
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'No existe' } });
  tasks.splice(idx, 1);
  res.status(204).send();
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: { code: err.code || 'INTERNAL_ERROR', message: err.message || 'Error interno' } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Día 2 listo → http://localhost:${PORT}`));
