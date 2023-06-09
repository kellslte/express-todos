// import dependencies
import Joi from "joi";

// define handler
const todoValidationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  completed: Joi.bool(),
});

// export handler
export default todoValidationSchema;