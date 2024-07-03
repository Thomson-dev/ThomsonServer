import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  
} from '../controller/LoginController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser, )




export default router