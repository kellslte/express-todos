const errorHandler = function (payload, schema) {

   const { error } = schema.validate(payload, { abortEarly: false });

   let errors = {};

  if (error) {
    error.details.forEach((item) => {
        let key = item.context.key;

      errors[key] = {
        message: item.message,
      };
    });

    return errors;
  }

  return null;
};

export default errorHandler;
