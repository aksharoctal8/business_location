import Business from "../../models/Business";
import bcrypt from 'bcrypt';
const createBusiness = async (req, res) => {
   try {

    
   } catch (error) {
     console.log(error);
     return res.status(400).json({ message: "Error creating business" });
   }
}
export default {
    createBusiness
}