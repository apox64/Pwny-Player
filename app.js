'use strict'

// local modules
const server = require('./lib/server'),
      api = require('./lib/api');

const packageJson = require('./package');

console.log(`App started: ${packageJson.name} (version: ${packageJson.version}) ...`);

const app = api.initAPI();

server.initServer(app);
server.startServer();
