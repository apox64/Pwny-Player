'use strict'

// local modules
const server = require('./lib/server'),
      api = require('./lib/api'),
      db = require('./lib/db');

const packageJson = require('./package');

console.log(`App started: ${packageJson.name} (version: ${packageJson.version}) ...`);

const dbHandle = db.initDB();
const app = api.initAPI(dbHandle);

server.initServer(app);
server.startServer();
