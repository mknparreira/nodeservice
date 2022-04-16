import 'jest';
import * as connection from '../../config/databaseConnection';
import App from '../../config/app';
import routes from '../../components/user/user-router';

import express from 'express';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';

describe('Rate Limit Feature', () => {
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

  it('should implement Rate Limit', async() => {
    const response = [];

    for (let i = 0; i < 5; i++) {
      const resp = await request(app)
        .get('/users')
        .set('Accept', 'application/json');

      response.push(resp.statusCode);
    }

    const lastItem = response[response.length - 1];

    expect(lastItem).toBe(StatusCodes.TOO_MANY_REQUESTS);
  });
});
