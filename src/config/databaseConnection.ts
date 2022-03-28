import { Connection, createConnection, EntityTarget, getConnection } from 'typeorm';
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

const getEntities = async () : Promise<{ name: EntityTarget<unknown>; tableName: string; }[]> => {
    const entities: { name: string; tableName: string; }[] = [];
    const connection = getConnection();
    const entityMetadatas = connection.entityMetadatas;

    entityMetadatas.forEach(entity => {
         entities.push({ name: entity.name, tableName: entity.tableName });
    });
    
    return entities;
};

const clearAll = async () : Promise<void> => {
    try {
        const connection = getConnection();
        const entities = await getEntities();
       
        //Note: To read the files in sequence, you cannot use forEach indeed.
        for (const entity of entities) {
            const repository = connection.getRepository(entity.name);
            await repository.clear();
        }       
    } catch (error) {
        Logger.error(error);
        throw new NotFoundException(`Cleaning test db: ${error}`);
    }
};

const close = async () : Promise<void> => {
    try {
        const connection = getConnection();
        if (connection.isConnected) await connection.close();
    } catch (error) {
        Logger.error(error);
        throw new NotFoundException(`Try to close connection: ${error}`);
    }
};

export { create, close, clearAll };