import { Router } from 'express';
import LocationCntroller from './LocationController.js';
import LocationProfileController from './LocationProfileController.js';
const route = Router();
route.post('/create', LocationCntroller.location);
route.get('/profile', LocationProfileController.profile);
route.patch("/profile/update",LocationProfileController.updateLoaction)
route.delete("/profile/delete",LocationProfileController.DeleteLoaction)
export default route;