import express from 'express'
const router = express.Router()
import {
 createUserDetails,
 getUserDetails,
 updateUserDetails
  
} from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').post(protect, createUserDetails);
router.route('/:id').put( updateUserDetails);
router.route('/:id').get( getUserDetails);

export default router