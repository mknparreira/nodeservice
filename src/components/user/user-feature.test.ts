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
    
    it('displays user register', async () => {
        await getRepository(User).insert({
            firstName: "John",
            lastName: "Doe",
            age: 36
        });

        const users = await getCustomRepository(UserRepository).getUsers();
        expect(users[0]).toBeInstanceOf(User);
    });
});