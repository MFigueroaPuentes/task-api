const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
