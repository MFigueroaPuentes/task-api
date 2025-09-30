
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Estado en memoria
const tasks = [];
const nowISO = () => new Date().toISOString();
const makeId = () => String(Date.now()) + Math.random().toString(16).slice(2);

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const { title, completed = false } = req.body || {};
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message: 'title es obligatorio' } });
  }
  const task = { id: makeId(), title: title.trim(), completed: Boolean(completed), createdAt: nowISO(), updatedAt: nowISO() };
  tasks.push(task);
  res.status(201).json(task);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Día 1 listo → http://localhost:${PORT}`));
