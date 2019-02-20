import request from 'supertest';
import { expect } from 'chai';

import app from '../index';

describe('POST /orders', () => {
  it('create an order', (done) => {
    request(app)
      .post('/api/v1/orders')
      .send({
        meal: 'rice',
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

describe('PUT /orders/1', () => {
  it('edit an already places order', (done) => {
    request(app)
      .put('/api/v1/orders/1')
      .send({
        meal: 'rice',
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

describe('GET /orders', () => {
  it('should get the order for the day', (done) => {
    request(app)
      .get('/api/v1/orders')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done(err);
      });
  });
});
