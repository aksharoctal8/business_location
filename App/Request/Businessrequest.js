<<<<<<< HEAD
import Joi from "joi";
const validRagister = (data) => {

    const Schema = Joi.object({
        name: Joi.string().required().label('name'),
    });
    return Schema.validate(data, { abortEarly: true, allowUnknown: true })

}
export { validRagister }
=======
// import Joi from "joi";
// const validRagister = async (req, res) => {
//     try {
//         const Schema = Joi.object({
//             username: Joi.string().required(),
//             email: Joi.string().email().required(),
//             password: Joi.string().required(),
//             address: Joi.string().required()

//         })
//         return Schema.validate(data, { abortEarly: true, allowUnknown: true })
//     } catch (error) {

//     }
// }
// export { validRagister }
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
