import dotenv from 'dotenv';
import NotFoundException from '../exceptions/notFound-exception';

const result = dotenv.config();

if (result?.error) throw new NotFoundException('Could not find .env file');

export default { general: { host: { port: process.env.HOST_PORT } } };
