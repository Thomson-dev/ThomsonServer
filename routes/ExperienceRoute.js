import express from 'express'
const router = express.Router()

import { ExperienceController, getExperience } from '../controller/ExperienceController.js'

router.route('/').get(getExperience);
router.route('/').post(ExperienceController);

export default router