import Joi from "joi";
const validRagister = (data) => {

    const Schema = Joi.object({
        name: Joi.string().required().label('name'),
    });
    return Schema.validate(data, { abortEarly: true, allowUnknown: true })

}
export { validRagister }