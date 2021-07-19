import express from 'express';
import { createNewClient, getClient } from '../controllers/Client.js';
const router = express.Router();

router.route('/').post(createNewClient).get(getClient);
// .post(createTasks);

export default router;  