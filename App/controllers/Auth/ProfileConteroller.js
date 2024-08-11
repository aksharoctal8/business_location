import User from "../../models/User.js";
import mongoose from "mongoose";
import jsonwebtoken from 'jsonwebtoken';
import { getUserLoginId } from "../../Helper/Helper.js";

const profile = async (req, res) => {
    try {
      const userId = await getUserLoginId(req); // Add await here
    //   console.log("user", userId);
      const userProfile = await User.findById(userId).select('_id name email ');
    //   console.log("profile", userProfile);
      if (!userProfile) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({profie:userProfile});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching profile" });
    }
  };

export default { profile };