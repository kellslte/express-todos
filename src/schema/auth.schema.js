// import dependencies
import Joi from "joi";

// define handler
const authValicationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(6)
    .max(16)
    .required(),
});

// export handler
export default authValicationSchema;