// import dependencies
import errorHandler from "../config/errorHandler.config";
import authValicationSchema from "../schema/auth.schema.js";

// define handler
const authMiddleware = ( req, res, next ) =>
{
        const errors = errorHandler(req.body, authValicationSchema);

        if (
          typeof errors === "object" &&
          errors !== null &&
          !Array.isArray(errors)
        ) {
          return res.status(422).json({
            success: false,
            error: errors,
          });
        }
        next();
}

// export handler
export default authMiddleware;