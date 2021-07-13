'use strict';

// Includes for the api
const express = require('express');
const app = express();

// Body Parser
app.use(express.json());

const PORT = process.env.PORT || 7000;

// Route Files
const tasks = require('./routes/task.js');

app.use('/api/v1/tasks', tasks);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
