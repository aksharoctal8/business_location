import Joi from "joi";
const validRagister = async(req,res)=>{
    try {
        const Schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    } catch (error) {
        
    }
}
export{validRagister}