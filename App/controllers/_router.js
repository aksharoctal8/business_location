import Auth from '../controllers/Auth/_router.js'
import User from '../controllers/User/_router.js'
import Business from '../controllers/Business/_router.js';
import AuthMiddlware from '../Middlware/AuthMiddlware.js'

export default async (app) =>{
    app.use('/auth',Auth)
    app.use('/user',User)
    app.use("/business",AuthMiddlware.verfyToken,Business)
}



