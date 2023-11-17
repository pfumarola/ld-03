import supertest from 'supertest';

import app from '../app.js';

describe('Checking app', () => {
    it('should return 200', async () => {
        const response = await supertest(app).get('/healthcheck');
        expect(response.statusCode).toBe(200);
    });
});
