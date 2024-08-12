import Auth from '../controllers/Auth/_router.js';
import User from '../controllers/User/_router.js'
import Business from '../controllers/Business/_router.js';
import AuthMiddlware from '../Middlware/AuthMiddlware.js';
import Location from '../controllers/Location/_router.js'

<<<<<<< HEAD
export default async (app) => {
    app.use('/auth', Auth);
    app.use('/user', User);
    app.use("/business", AuthMiddlware.verfyToken, Business);
    app.use("/location",AuthMiddlware.verfyToken,Location)
=======
export default async (app) =>{
    app.use('/auth',Auth)
    app.use('/user',User)
    app.use("/business",AuthMiddlware.verfyToken,Business)
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
}



