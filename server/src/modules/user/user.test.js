const request = require('supertest');
const mongoose = require('mongoose');

describe('User module Tests', () => {

    beforeAll(() => {
      server = require('../../server').app;
      mongoId = mongoose.Types.ObjectId();
      accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTMyZTZhMzI1YTZiM2I3NTJlMDg2YmMiLCJlbWFpbCI6ImFkbWluQHZtcy5haSIsImNsaWVudF9uYW1lIjoidm1zIiwiY2xpZW50X2Fjcm9ueW0iOiJWTVMiLCJpYXQiOjE1ODIwMDgxODAsImV4cCI6MTU4MjA5NDU4MH0.XVB8oQDlwbn6nfCZaLFR2VJ1hnS6ezwPBbDT4N8m5fE';
    });

    afterAll(async () => {
      server.close();
    });

    describe('/POST', () => {
        it('should return 200 for valid request and 400 for already in use request', async () => {
          let res = await request(server)
            .post(cameraModuleURL + "/checkExist")
            .set('Accept', 'application/json')
            .set('x-access-token', accessToken )
            .send({
              camera_name: 'camname'
            });
          expect(res.status).toBe(success);
        });
    });

})