import { Router } from 'express'
import AuthController from './AuthController.js'
import ProfileConteroller from './ProfileConteroller.js';
import AuthMiddlware from '../../Middlware/AuthMiddlware.js';

const route = Router();

route.post('/register', AuthController.register)
route.post('/login', AuthController.login);
route.get("/profile", AuthMiddlware.verfyToken, ProfileConteroller.profile)
route.get("/profile/:id", AuthMiddlware.verfyToken, ProfileConteroller.getprofileById)
route.patch("/profile/update",AuthMiddlware.verfyToken,ProfileConteroller.UpdateProfile)
route.patch("/profile/update/:id",AuthMiddlware.verfyToken,ProfileConteroller.UpdateProfileById)
route.delete("/profile/delete",AuthMiddlware.verfyToken,ProfileConteroller.DeleteeProfile)
route.delete("/profile/delete/:id",AuthMiddlware.verfyToken,ProfileConteroller.DeleteeProfileById)
export default route