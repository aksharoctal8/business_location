import { Router } from 'express';
import StroreController from './BusinessController.js';
import StroreProfileController from './BusinessProfileController.js'
const route = Router();
route.post('/create', StroreController.store);
route.get('/viewbusiness', StroreProfileController.viewBusiness);
route.get('/business/:id', StroreProfileController.getBusinessById);
route.patch("/updatebusiness/:id",StroreProfileController.updateBusinessId);
route.patch("/update",StroreProfileController.updateBusiness)
route.delete("/delete",StroreProfileController.deleteBusinessProfile)
route.delete("/delete/:id",StroreProfileController.deleteBusinessProfileId)
export default route;