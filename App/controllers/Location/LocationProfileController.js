import Loaction from "../../models/Loaction.js"
import { getUserLoginId } from "../../Helper/Helper.js"

//Location Profile..
const getLocation = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let Loaction = await Loaction.find({ user: userId }).populate('user', '_id name email').select('_id loaction business_id').exec();
    return res.status(200).json({ message: "Location data retrieved successfully", data: Loaction })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error retrieving location data" });
  }
}

// Get Location by ID
const getLoactionById = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let Loaction = await Loaction.findById(req.params.id).populate('user', '_id name email').select('_id loaction business_id').exec();
    return res.status(200).json({ message: "Location data retrieved successfully", data: Loaction })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error retrieving location data" });
  }
}
//Update Loaction..


const updateLoaction = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let Location = await Loaction.findOne({ user: userId });
    Location.loaction = req.body.loaction;
    Location.business_id = req.body.business_id;
    let updateLoaction = await Location.save()
    return res.status(200).json({ message: "Loaction update successfully", data: updateLoaction });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error Upadating Location..' })
  }
}
const updateLoactionById = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let Location = await Loaction.findById(req.params.id);
    Location.loaction = req.body.loaction;
    Location.business_id = req.body.business_id;
    let updateLoaction = await Location.save()
    return res.status(200).json({ message: "Loaction update successfully", data: updateLoaction });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error Upadating Location..' })
  }
}
//Delete Loaction..
const DeleteLoaction = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let DeleteLoaction = await Loaction.findOneAndDelete({ user: userId })
    if (DeleteLoaction) {
      return res.status(200).json({ message: "Loaction Delete successfully", data: DeleteLoaction })
    } else {
      return res.status(200).json({ message: "Profile can't Delete" })
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error Delete Profile" })
  }
}
const DeleteLoactionByID = async (req, res) => {
  try {
    let DeleteLoaction = await Loaction.findByIdAndDelete(req.params.id)
    if (DeleteLoaction) {
      return res.status(200).json({ message: "Loaction Delete successfully", data: DeleteLoaction })
    } else {
      return res.status(200).json({ message: "Profile can't Delete" })
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error Delete Profile" })
  }
}

export default {
  getLocation,
  getLoactionById,
  updateLoaction,
  updateLoactionById,
  DeleteLoaction,
  DeleteLoactionByID
}
