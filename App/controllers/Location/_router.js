import { Router } from 'express';
import LocationCntroller from './LocationController.js';
import LocationProfileController from './LocationProfileController.js';
const route = Router();
route.post('/create', LocationCntroller.createLocation);
route.get('/viewlocation', LocationProfileController.getLocation);
route.get('/location/:id', LocationProfileController.getLoactionById);
route.patch("/update",LocationProfileController.updateLoaction)
route.patch("/update/:id",LocationProfileController.updateLoactionById)
route.delete("/delete",LocationProfileController.DeleteLoaction)
route.delete("/delete/:id",LocationProfileController.DeleteLoactionByID)
export default route;