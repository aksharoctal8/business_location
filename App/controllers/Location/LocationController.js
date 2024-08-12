import Location from '../../models/Loaction.js'
import Business from '../../models/Business.js';
import User from '../../models/User.js';
import {validLoaction} from "../../Request/LocationRequest.js"
import {getUserLoginId} from "../../Helper/Helper.js"

//Create Loaction..
const location = async(req,res)=>{
    try {
        const { error } = await validLoaction(req.body);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        
        let input = {
            loaction: req.body.loaction,
            business_id: req.body.business_id
        }
        input['user'] = await getUserLoginId(req);
        let Loaction = await Location.create(input)
        console.log(Loaction)   
        if (Loaction) {
            let bid  = await Business.findById(input.business_id);
            bid.location_id.push(Loaction.id);
            await Business.findByIdAndUpdate(input.business_id,bid);
            console.log("hello",bid);
            
            return res.status(200).json({ message: "The Loaction create successfully.", data: Loaction, status: 1 });
        } else {
            return res.status(200).json({ message: "The Loaction can't create."})
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error creating Loaction" });
    }
}
export default {
    location
}