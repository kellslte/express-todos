// import dependencies
import mongoose from "mongoose";
import config from '../config/main.config.js'
// configure application
const connectToDatabase = function ()
{
    // define connection
    mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
    // listen for errors
    mongoose.connection.on("error", (err) =>
      console.error(`  ☣  Error in connectiong to our database: ${err}  ☣ `)
    );
    // listen for successful connection
    mongoose.connection.once("open", () =>
      console.info(`🚀  Database connection successful 🚀 `)
    );
}
// export handler
export default connectToDatabase;