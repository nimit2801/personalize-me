import express from 'express';
import { createTaskClass } from '../controllers/taskClass.js';
const router = express.Router();

router.route('/').post(createTaskClass);
// .post(createTasks);

export default router;