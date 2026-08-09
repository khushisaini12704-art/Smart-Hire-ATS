process.env.JWT_SECRET='test-secret-that-is-long-enough';
const request=require('supertest');
const app=require('../server');

describe('health endpoint',()=>{
  it('returns API health',async()=>{
    const response=await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({status:'ok'});
  });
});
