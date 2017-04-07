'use strict'

// local modules
const server = require('./server'),
      REST = require('./REST'),
      db = require('./db');

const dbHandle = db.initDB();
const app = REST.initREST(dbHandle);

server.initServer(app);
server.startServer();
