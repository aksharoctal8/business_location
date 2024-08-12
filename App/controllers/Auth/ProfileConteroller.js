import User from "../../models/User.js";
import { getUserLoginId } from "../../Helper/Helper.js";

//User Profile..
const profile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    const userProfile = await User.findById(userId).select('_id name email')
    if (!userProfile) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ profie: userProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching profile" });
  }
};
//Upadate User Profile
const UpdateProfile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let user = await User.findById(userId);
    user.name = req.body.name;
    user.email = req.body.email;
    let updateusr = await user.save()
    return res.status(200).json({ message: "Profile update successfully", data: updateusr });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error editing Profile' })
  }
}
//Delete User Profile
const DeleteeProfile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let DeleteeProfile = await User.findByIdAndDelete(userId)
    if (DeleteeProfile) {
      return res.status(200).json({ message: "Profile Delete successfully", data: DeleteeProfile })
    } else {
      return res.status(200).json({ message: "Profile can't Delete", data: DeleteeProfile })
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
};