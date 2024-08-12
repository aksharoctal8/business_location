

import Business from "../../models/Business.js";
import _ from 'lodash'
import { validRagister } from '../../Request/Businessrequest.js'
import { getUserLoginId } from '../../Helper/Helper.js'

//Create Business.. 
const store = async (req, res) => {
    try {
        const { error } = await validRagister(req.body);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        let input = {
            name: req.body.name,
        }
        input['user'] = await getUserLoginId(req);
        let businessRecord = await Business.create(input)
        if (businessRecord) {
            return res.status(200).json({ message: "The Business create successfully.", data: businessRecord, status: 1 });
        } else {
            return res.status(200).json({ message: "The Business can't create." });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error creating business" });
    }
}
export default {
    store
}