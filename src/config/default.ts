import dotenv from 'dotenv';

const result = dotenv.config();

if (result?.error) throw new Error("Couldn't find .env file"); 

export default {
    general: {
        host: {
            port: process.env.HOST_PORT,
        },
    }
};