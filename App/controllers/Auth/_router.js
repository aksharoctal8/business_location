import { Router } from 'express'
import AuthController from './AuthController.js'
import ProfileConteroller from './ProfileConteroller.js';
import AuthMiddlware from '../../Middlware/AuthMiddlware.js';

const route = Router();

route.post('/register',AuthController.register)
route.post('/login',AuthController.login);
route.get("/profile",AuthMiddlware.verfyToken,ProfileConteroller.profile)
export default route