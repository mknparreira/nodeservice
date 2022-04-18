import * as connection from '../config/databaseConnection';
import request from 'supertest';
import App from '../config/app';
import routes from '../components/user/user-router';
import express from 'express';

describe('User Controller', () => {
  let app: express.Application;

  beforeAll(async() => {
    await connection.create();

    app = new App([routes]).app;
  });

  afterEach(async() => {
    await connection.clearAll();
  });

  afterAll(async() => {
    await connection.close();
  });

  it('should implement CORS', async() => {
    const { headers } = await request(app).get('/');

    expect(headers['access-control-allow-origin']).toBe('*');
  });
});
