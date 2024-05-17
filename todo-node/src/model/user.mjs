import Joi from "joi";

var userValidate = Joi.object({
    email: Joi.required().email(),
    name: Joi.required().min(3),
    userName: Joi.required().min(4),

})

export default userValidate