import jwt from "jsonwebtoken";
// import config from "config";

export  default async (req, res, next) => {
    try {
        if (!req?.headers){
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        const authorization  = req.headers["authorization"].split(' ');
        let token = authorization[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        const tokenData = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        if (tokenData) next();
    } catch (err) {
        return res.status(401).json({ message: 'Access denied. Invalid token.' });
    }
};