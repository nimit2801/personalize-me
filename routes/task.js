import express from 'express';
import { getAllTasksOfTaskClass, getAllTasksOfUser, createTask, getSingleTask, deleteSingleTask} from '../controllers/task.js';
const router = express.Router();
router.route('/:userName').get(getAllTasksOfUser).post(createTask);
router.route('/:userName/:taskClass').get(getAllTasksOfTaskClass);
router.route('/:userName/:taskClass').get(getSingleTask).delete(deleteSingleTask)

export default router;