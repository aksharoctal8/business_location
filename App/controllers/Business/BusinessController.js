import Business from "../../models/Business.js";
import bcrypt from 'bcrypt';
import _ from 'lodash'
// import {validRagister} from '../../Request/Businessrequest.js'

const createBusiness = async (req, res) => {
   try {
    // const {error} = await validRagister(req.body);
    //     if(error){
    //         return res.status(400).send({error: error.details[0].message});  
    //     }
      const input = _.pick(req.body, ['username', 'email', 'password', 'address']);
      input['password'] = await bcrypt.hash(input['password'], 10);
      let businessRecord = await Business.create(input)
      if (businessRecord) {

        return res.status(200).json({ message: "register..", data: businessRecord, status: 1 })
      } else {
        return res.status(200).json({ message: "registe errorr..", status: 0 })
      }
    
   } catch (error) {
     console.log(error);
     return res.status(400).json({ message: "Error creating business" });
   }
}
export default {
    createBusiness
}