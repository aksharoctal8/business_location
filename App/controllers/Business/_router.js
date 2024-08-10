import { Router } from 'express';
import StroreController from './BusinessController.js';
const route = Router();
route.post('/businessCreate', StroreController.businessCreate);
export default route;