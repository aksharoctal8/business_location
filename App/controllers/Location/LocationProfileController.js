import Loaction from "../../models/Loaction.js"
import { getUserLoginId } from "../../Helper/Helper.js"

//Location Profile..
const profile = async (req, res) => {
  const userId = await getUserLoginId(req);
  let Loaction = await Loaction.findOne({ user: userId }).populate('user', '_id name email').select('_id loaction business_id').exec();
  return res.status(200).json({ message: "Business Data", data: Loaction })
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
    return res.status(400).json({ message: 'Error editing Profile' })
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

export default {
  profile,
  updateLoaction,
  DeleteLoaction
}
