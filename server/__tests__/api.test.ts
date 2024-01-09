import request from 'supertest'
import { app } from '../src/'

describe('GET /api', () => {
  it('should return user data', async () => {
    const res = await request(app).get('/api')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('user')
  })

  // Additional tests for error cases can be added here
})
