import Joi from "joi";

<<<<<<< HEAD
const validateLogin = (data) => {
    const Schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })

    return Schema.validate(data, { abortEarly: true, allowUnknown: true })
=======
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
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
}

export { validateLogin } 