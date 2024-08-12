import Joi from "joi";
const validLoaction = (data) => {

    const Schema = Joi.object({
        loaction: Joi.string().required().label('loaction'),
        business_id: Joi.string().required().label('business_id'),
    });
    return Schema.validate(data, { abortEarly: true, allowUnknown: true })

}
export { validLoaction }