import { Router } from 'express';
import StroreController from './BusinessController.js';
import StroreProfileController from './BusinessProfileController.js'
const route = Router();
route.post('/create', StroreController.store);
route.get('/profile', StroreProfileController.profile);
route.patch("/profile/update",StroreProfileController.UpdateProfile)
route.delete("/profile/delete",StroreProfileController.DeleteeProfile)
export default route;