import Joi from "joi";

const validateLogin = (data) =>{
    try {
        const Schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
        
        return Schema.validate(data,{abortEarly:true,allowUnknown:true})
    } catch (error) {
        console.log(err);
        return resizeBy.status(400).json({message:'validation error'})
    }
}

export {validateLogin} 