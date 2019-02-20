import request from 'supertest';
import { expect } from 'chai';

import app from '../index';

describe('POST /menu/', () => {
  it('should create the menu for the day', (done) => {
    request(app)
      .post('/api/v1/menu/')
      .send({
        menu: ['egg', 'plaintain']
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done(err);
      });
  });
});

describe('GET /menu/', () => {
  it('should get the menu for the day', (done) => {
    request(app)
      .get('/api/v1/menu/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done(err);
      });
  });
});
