
import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const getUserLoginId = async (req, res) => {
    try {
        const authorization = req.headers['authorization'] ? req.headers['authorization']?.split(' ') : null;
        if (!authorization) return res.status(200).json({ message: 'User not logged in..' });
        let token = authorization[1];
        if (!token) return res.status(200).json({ message: 'User not logged in' })
        const tokeData = jwt.verify(token, 'user');
        const _id = tokeData.uId;
        if (!_id) {
            return null;
        }
        return _id;
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'helper side error..!' })
    }

}