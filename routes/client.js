import express from 'express';
import { createNewClient } from '../controllers/Client.js';
const router = express.Router();

router.route('/').post(createNewClient);
// .post(createTasks);

export default router;  