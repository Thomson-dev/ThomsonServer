import express from 'express'
const router = express.Router()


import { createProject, getUserProject } from '../controller/ProjectController.js';

router.route('/').get(getUserProject);
router.route('/').post(createProject);

export default router