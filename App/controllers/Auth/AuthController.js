import User from "../../models/User.js";
import { validateLogin } from '../../Request/AuthRequest.js'
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
import _ from 'lodash'

//Register User
const register = async (req, res) => {
    try {
        const { error } = await validateLogin(req.body);
        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }
        let checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) return res.status(200).json({ message: 'User alerdy Exist..!' });
        const input = _.pick(req.body, ['name', 'email', 'password']);
        input['password'] = await bcrypt.hash(input['password'], 10);
        let user = await User.create(input);
        return res.status(200).json({ message: "The user register successfully.", data: user })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error..", status: 0 })
    }
}
//Login User 
const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.json({ message: 'Email not exists' });
        let isPassowrdCorrent = await bcrypt.compare(req.body.password, user.password);
        if (!isPassowrdCorrent) return res.json({ message: 'Password incorrect' });
        let token = jsonwebtoken.sign({ uId: user._id }, 'user', { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login is success', status: 1, userToken: token });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error..", status: 0 })
    }
}

export default {
    register,
    login,
}