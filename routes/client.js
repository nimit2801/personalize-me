import express from 'express';
import { createNewClient, getClient, deleteClient } from '../controllers/Client.js';
const router = express.Router();

router.route('/').post(createNewClient).get(getClient).delete(deleteClient);
// .post(createTasks);

export default router;  