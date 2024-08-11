import { Router } from 'express';
import StroreController from './BusinessController.js';
const route = Router();
route.post('/createbusiness', StroreController.createBusiness);
export default route;