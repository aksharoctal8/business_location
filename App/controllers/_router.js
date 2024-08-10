import Auth from '../controllers/Auth/_router.js'
import User from '../controllers/User/_router.js'

export default async (app) =>{
    app.use('/auth',Auth)
    app.use('/user',User)
}



