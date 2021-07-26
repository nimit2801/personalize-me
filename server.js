// Includes for the api
import express from 'express';
import _ from './database/connect.js';
const app = express();

// Body Parser
app.use(express.json());

// importing middlewares
// import { auth } from './middleware/auth.js';
// app.use(auth);
const PORT = process.env.PORT || 7000;

// Route Files
import tasks from './routes/task.js';
import client from './routes/client.js';
import taskClass from './routes/taskClass.js';
// import test from './routes/test.js';
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/clients', client);
app.use('/api/v1/taskclass', taskClass);
// app.use('/api/v1/test', test);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
