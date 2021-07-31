// Includes for the api
import express from 'express';
const app = express();
const PORT = process.env.PORT || 7000;
import {conn} from './database/connect.js';
conn();

// Body Parser
app.use(express.json());

//Connecting to the database

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
