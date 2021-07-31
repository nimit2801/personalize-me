import express from 'express';
import { createTaskClass, getTaskClasses, deleteTaskClass } from '../controllers/taskClass.js';
const router = express.Router();

router.route('/').post(createTaskClass).get(getTaskClasses).delete(deleteTaskClass);

export default router;