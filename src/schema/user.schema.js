// import dependencies
import Joi from "joi";

// define handler
const userValidationSchema = Joi.object( {
    name: Joi.string().min( 3 ).max( 100 ).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min( 6 ).max( 16 ).required(),
    passwordConfirm: Joi.ref('password')
} )

// export handler
export default userValidationSchema;