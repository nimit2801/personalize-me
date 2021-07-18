import express from 'express';
import { getTasks, createTasks } from '../controllers/task.js';
const router = express.Router();

router.route('/').get(getTasks).post(createTasks);
// .post(createTasks);

export default router;