// Includes for the api
import express from 'express';
const app = express();

// Body Parser
app.use(express.json());

const PORT = process.env.PORT || 7000;

// Route Files
import tasks from './routes/task.js';
app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
