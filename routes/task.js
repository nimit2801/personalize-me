import express from 'express';
import { getAllTasksOfTaskClass, getAllTasksOfUser, createTask, getSingleTask, deleteSingleTask} from '../controllers/task.js';
const router = express.Router();

router.route('/:userName').get(getAllTasksOfUser);
router.route(':userName/:taskClass').get(getAllTasksOfTaskClass);
router.route('/').post(createTask)
router.route('/userName/:id').get(getSingleTask).delete(deleteSingleTask)

export default router;