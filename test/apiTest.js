'use strict';

const assert = require('assertthat'),
      request = require('supertest');

const api = require('../lib/api');

suite('Pwny-Player', function () {
      let app;

  suiteSetup(function () {
    // ...
  });

  suiteTeardown(function () {
    // ...
  });

  setup(function () {
    app = api.initAPI();
  });

  teardown(function () {
    app = undefined;
  });

    suite('Basic 200 OK Tests (Availability)', function () {
        test('returns status code 200.', function (done) {
        request(app).
            get('/').
            end((err, res) => {
                assert.that(err).is.null();
                assert.that(res.statusCode).is.equalTo(200);
                done();
            });
        });

        test('returns status code 200.', function (done) {
          request(app).
            get('/songs').
            end((err, res) => {
                assert.that(err).is.null();
                assert.that(res.statusCode).is.equalTo(200);
                done();
            });
        });
    });

    suite('Stream Tests', function () {
      //...
    });

});
