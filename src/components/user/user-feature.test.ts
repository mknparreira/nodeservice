import 'jest';
import * as connection from '../../config/databaseConnection';
import { UserRepository } from './user-repository';
import { User } from './user-model';
import { getCustomRepository } from 'typeorm';

describe('User Feature', () => {
  beforeAll(async() => {
    await connection.create();
  });

  afterEach(async() => {
    await connection.clearAll();
  });

  afterAll(async() => {
    await connection.close();
  });

  it('register an new user', async() => {
    const user = await getCustomRepository(UserRepository).insert({
      name: 'John',
      email: 'john.doe@gmail.com',
      birthDate: '1985-04-01',
      vat: 123
    });

    expect(user.raw.insertId).not.toBeNull();
  });

  it('displays user register', async() => {
    await getCustomRepository(UserRepository).insert({
      name: 'John',
      email: 'john.doe@gmail.com',
      birthDate: '1985-04-01',
      vat: 123
    });

    const users = await getCustomRepository(UserRepository).getUsers();

    expect(users[0]).toBeInstanceOf(User);
  });

  it('should edit an user', async() => {
    await getCustomRepository(UserRepository).insert({
      name: 'John',
      email: 'john.doe@gmail.com',
      birthDate: '1985-04-01',
      vat: 123
    });

    const users = await getCustomRepository(UserRepository).getUsers();
    const vat: number = users[0].vat as number;
    const newUserData = Object.assign({
      name: 'Johnny',
      email: 'johnny.doe@gmail.com',
      vat: vat
    });

    const edit = await getCustomRepository(UserRepository).edit(newUserData);
    const user = await getCustomRepository(UserRepository)
      .getUserByVatNumber({ vatNumber: vat });

    expect(edit.affected).toBe(1);
    expect(user).toBeInstanceOf(User);
    expect(user?.name).toBe(newUserData.name);
    expect(user?.email).toBe(newUserData.email);
    expect(user?.vat).toBe(vat);
  });

  it('should list an user', async() => {
    await getCustomRepository(UserRepository).insert({
      name: 'John',
      email: 'john.doe@gmail.com',
      birthDate: '1985-04-01',
      vat: 123
    });

    const users = await getCustomRepository(UserRepository).getUsers();
    const vat: number = users[0].vat as number;
    const user = await getCustomRepository(UserRepository)
      .getUserByVatNumber({ vatNumber: vat });

    expect(user).toBeInstanceOf(User);
  });
});
