import { Router } from 'express';
import StroreController from './BusinessController.js';
import StroreProfileController from './BusinessProfileController.js'
const route = Router();
<<<<<<< HEAD
route.post('/create', StroreController.store);
route.get('/profile', StroreProfileController.profile);
route.patch("/profile/update",StroreProfileController.UpdateProfile)
route.delete("/profile/delete",StroreProfileController.DeleteeProfile)
=======
route.post('/createbusiness', StroreController.createBusiness);
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
export default route;