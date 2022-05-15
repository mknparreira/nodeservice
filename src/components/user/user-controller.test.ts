import * as connection from '../../config/databaseConnection';
import request from 'supertest';
import App from '../../config/app';
import routes from './user-router';
import authRoutes from './../auth/auth-router';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
describe('User Controller', () => {
  let app: express.Application;

  beforeAll(async() => {
    await connection.create();

    app = new App([routes, authRoutes]).app;
  });

  afterEach(async() => {
    await connection.clearAll();
  });

  afterAll(async() => {
    await connection.close();
  });

  it('/user/create', async() => {

    const authToken = await request(app)
    .get('/auth/getToken')
    .set('Accept', 'application/json')
      
    const response = await request(app)
      .post('/user/create')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken.body.token}`)
      .send({
        'name': 'John Doe',
        'address': null,
        'birthDate': '1985-04-01',
        'email': 'joe.doe@gamil.com',
        'vat': 30
      })
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.email).toBe('joe.doe@gamil.com');
    expect(response.body.vat).toBe(30);
    expect(response.status).toBe(StatusCodes.CREATED);
  });

  it('/users', async() => {

    const authToken = await request(app)
    .get('/auth/getToken')
    .set('Accept', 'application/json')

    await request(app).post('/user/create')
    .set('Authorization', `Bearer ${authToken.body.token}`)
    .send({
      'name': 'John Doe',
      'address': null,
      'birthDate': '1985-04-01',
      'email': 'joe.doe@gamil.com',
      'vat': 30
    });

    const response = await request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken.body.token}`)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].email).toBe('joe.doe@gamil.com');
    expect(response.body[0].vat).toBe('30');
    expect(response.status).toBe(StatusCodes.OK);
  });

  it('/user/show/:id', async() => {
    const authToken = await request(app)
    .get('/auth/getToken')
    .set('Accept', 'application/json')
    
    await request(app).post('/user/create')
    .set('Authorization', `Bearer ${authToken.body.token}`)
    .send({
      'name': 'John Doe',
      'address': null,
      'birthDate': '1985-04-01',
      'email': 'joe.doe@gamil.com',
      'vat': 30
    });

    const response = await request(app)
      .get('/user/show/30')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken.body.token}`)
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.email).toBe('joe.doe@gamil.com');
    expect(response.body.vat).toBe('30');
    expect(response.status).toBe(StatusCodes.OK);
  });

  it('/user/edit', async() => {
    const authToken = await request(app)
    .get('/auth/getToken')
    .set('Accept', 'application/json')
    
    await request(app).post('/user/create')
    .set('Authorization', `Bearer ${authToken.body.token}`)
    .send({
      'name': 'John Doe',
      'address': null,
      'birthDate': '1985-04-01',
      'email': 'joe.doe@gamil.com',
      'vat': 30
    });

    const response = await request(app)
      .put('/user/edit')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${authToken.body.token}`)
      .send({
        'name': 'John Deo Jr',
        'address': null,
        'birthDate': '1985-04-01',
        'email': 'joe.junior@gamil.com',
        'vat': 30
      })
      .expect('Content-Type', 'application/json; charset=utf-8');

    expect(response.body).toBe('The resource successfully updated');
    expect(response.status).toBe(StatusCodes.NO_CONTENT);
  });
});
