import 'jest';
import * as connection from '../../config/databaseConnection';
import { UserRepository } from './user-repository';
import { User } from './user-model';
import { getCustomRepository, getRepository } from 'typeorm';

describe('User Feature', () => {
    beforeAll(async () => { 
        await connection.create();
    });

    afterEach(async () => {
        await connection.clearAll();
    });

    afterAll(async () => {
        await connection.close();
    });

    it('register an new user', async () => {
        const user = await getRepository(User).insert({
            name: "John",
            email: "john.doe@gmail.com",
            birthDate: '1985-04-01'
        });
        expect(user.raw.insertId).not.toBeNull();
    });

    
    it('displays user register', async () => {
        await getRepository(User).insert({
            name: "John",
            email: "john.doe@gmail.com",
            birthDate: '1985-04-01'
        });

        const users = await getCustomRepository(UserRepository).getUsers();

        expect(users[0]).toBeInstanceOf(User);
    });
});