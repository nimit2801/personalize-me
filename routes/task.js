const express = require('express');
const router = express.Router();
const { getTasks, createTasks } = require('../controllers/task.js');

router.route('/').get(getTasks).post(createTasks);
// .post(createTasks);

module.exports = router;
