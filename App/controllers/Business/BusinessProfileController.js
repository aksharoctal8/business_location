import Business from "../../models/Business.js"
import { getUserLoginId } from "../../Helper/Helper.js"

//Business Profile Management

// View all businesses associated with the user's token
const viewBusiness = async (req, res) => {
  const userId = await getUserLoginId(req);
  let businesses = await Business.find({ user: userId }).populate('location_id', '_id loaction').populate('user', '_id name email').select('_id name').exec();
  return res.status(200).json({ message: "Businesses retrieved successfully.", data: businesses })
}
// View a business by its ID
const getBusinessById = async (req, res) => {
  const userId = await getUserLoginId(req);
  let business = await Business.findById(req.params.id).populate('location_id', '_id loaction').populate('user', '_id name email').select('_id name').exec();
  return res.status(200).json({ message: "Businesses retrieved successfully.", data: business })
}

// Update a business associated with the user's token
const updateBusiness = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let business = await Business.findOne({ user: userId });
    business.name = req.body.name;
    let updatedBusinesses = await business.save()
    return res.status(200).json({ message: "Business profile updated successfully", data: updatedBusinesses });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error updating busines Profile' })
  }
}
// Update a business by its ID
const updateBusinessId = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let business = await Business.findById(req.params.id);
    business.name = req.body.name;
    let updatedBusiness = await business.save()
    return res.status(200).json({ message: "Business profile updated successfully", data: updatedBusiness });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error updating busines Profile' })
  }
}

//Delete a business by its ID
const deleteBusinessProfileId = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let deletedBusiness = await Business.finsdByIDAndDelete(req.params.id);
    if (deletedBusiness) {
      return res.status(200).json({ message: "Business profile deleted successfully ", data: deletedBusiness })
    } else {
      return res.status(200).json({ message: "Business profile could not be deleted" })
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error deleting  busines Profile" })
  }
}
// Delete a business associated with the user's token 
const deleteBusinessProfile = async (req, res) => {
  try {
    const userId = await getUserLoginId(req);
    let deletedBusiness  = await Business.findOneAndDelete({ user: userId })
    if (deletedBusiness ) {
      return res.status(200).json({ message: "Business profile deleted successfully ", data: deletedBusiness  })
    } else {
      return res.status(200).json({ message: "Business profile could not be deleted" })
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error deleting  busines Profile" })
  }
}
export default {
  getBusinessById,
  viewBusiness,
  updateBusinessId,
  updateBusiness,
  deleteBusinessProfile,
  deleteBusinessProfileId 
}
