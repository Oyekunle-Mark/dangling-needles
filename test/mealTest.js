import request from 'supertest';
import { expect } from 'chai';

import app from '../index';

describe('GET /meals/', () => {
  it('should return the meal options available', (done) => {
    request(app)
      .get('/api/v1/meals/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        done(err);
      });
  });
});

describe('POST /meals/', () => {
  it('should create a meal option', (done) => {
    request(app)
      .post('/api/v1/meals/')
      .send({
        meal: 'rice',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body.data[0]).to.have.property('meal');
        expect(res.body.data[0].meal).to.equal('rice');
        done(err);
      });
  });

  it('should create a second meal option', (done) => {
    request(app)
      .post('/api/v1/meals/')
      .send({
        meal: 'egg',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body.data[0]).to.have.property('meal');
        expect(res.body.data[0].meal).to.equal('egg');
        done(err);
      });
  });

  it('should create a third meal option', (done) => {
    request(app)
      .post('/api/v1/meals/')
      .send({
        meal: 'plantain',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body.data[0]).to.have.property('meal');
        expect(res.body.data[0].meal).to.equal('plantain');
        done(err);
      });
  });
});

describe('PUT /meals/', () => {
  it('should change a meal option', (done) => {
    request(app)
      .put('/api/v1/meals/1')
      .send({
        meal: 'beans',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body.data[0]).to.have.property('meal');
        expect(res.body.data[0].meal).to.equal('beans');
        done(err);
      });
  });
});

describe('DELETE /meals/', () => {
  it('should change a meal option', (done) => {
    request(app)
      .delete('/api/v1/meals/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('Meal deleted');
        done(err);
      });
  });
});
