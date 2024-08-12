import { Router } from 'express'
import AuthController from './AuthController.js'
import ProfileConteroller from './ProfileConteroller.js';
import AuthMiddlware from '../../Middlware/AuthMiddlware.js';

const route = Router();

route.post('/register', AuthController.register)
route.post('/login', AuthController.login);
route.get("/profile", AuthMiddlware.verfyToken, ProfileConteroller.profile)
route.patch("/profile/update",AuthMiddlware.verfyToken,ProfileConteroller.UpdateProfile)
route.delete("/profile/delete",AuthMiddlware.verfyToken,ProfileConteroller.DeleteeProfile)
export default route