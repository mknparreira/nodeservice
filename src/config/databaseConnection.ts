import { Connection, createConnection } from 'typeorm';
import NotFoundException from '../exceptions/notFound-exception';
import Logger from './logger';

const create = async () : Promise<Connection> => {
    try {
        const connection = await createConnection();
        if(connection.isConnected) Logger.info('The database is connected');
        return connection;
    } catch (error) {
        Logger.error(error);
        throw new NotFoundException("It is not possible connect with database 2");
    }
};

const databaseConnection = { 
    create,
};
  
export default databaseConnection;