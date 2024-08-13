import Business from "../../models/Business.js"
import { getUserLoginId } from "../../Helper/Helper.js"

//Business Profile..
const profile = async (req, res) => {
  const userId = await getUserLoginId(req);
  let strore = await Business.findOne({ user: userId }).populate('location_id', '_id loaction').populate('user', '_id name email').select('_id name').exec();
  return res.status(200).json({ message: "Business Data", data: strore })
}
// Update Business..
const UpdateProfile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let strore = await Business.findOne({ user: userId });
    strore.name = req.body.name;
    let updateStrore = await strore.save()
    return res.status(200).json({ message: "Profile update successfully", data: updateStrore });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error editing Profile' })
  }
}
//Delete Business..
const DeleteeProfile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let DeleteStrore = await Business.findOneAndDelete({ user: userId })
    if (DeleteStrore) {
      return res.status(200).json({ message: "Profile Delete successfully", data: DeleteStrore })
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
  UpdateProfile,
  DeleteeProfile
}
