import {Router} from'express'
import { registerUser } from '../controller/user.controller.js'

const router = Router()

// http post method 
router.route("/register").post(registerUser)

export default router