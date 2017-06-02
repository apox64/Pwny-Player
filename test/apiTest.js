'use strict';

const assert = require('assertthat'),
      request = require('supertest');

const api = require('../lib/api'),
      db = require('../lib/db');

suite('api', function () {
      let app;
      let dbHandle;

  suiteSetup(function () {
    // ...
  });

  suiteTeardown(function () {
    // ...
  });

  setup(function () {
    dbHandle = db.initDB();
    app = api.initAPI(dbHandle);
  });

  teardown(function () {
    app = undefined;
  });

    suite('GET /', function () {
        test('returns status code 200.', function (done) {
        request(app).
            get('/stream/play').
            end((err, res) => {
                assert.that(err).is.null();
                assert.that(res.statusCode).is.equalTo(200);
                done();
            });
        });
    });
});
