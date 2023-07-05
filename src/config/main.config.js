import * as dotenv from 'dotenv';
dotenv.config()

const config = {
    server: {
        port: parseInt(process.env.PORT),
    },
    db: {
        type: 'mongodb', // 'postgres
        uri: process.env.MONGODB_URI
    }
}

export default config;