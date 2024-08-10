import { Router } from 'express'
import AuthController from './AuthController.js'

const route = Router();

route.post('/register',AuthController.register)
route.post('/login',AuthController.login);
route.get("/Profile",AuthController.viewProfile)
export default route