/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */
/* eslint-disable no-console, no-shadow */

import app from './app';
// import db from './db';
import redis from './redis';
import UserDBSchema from './database/schema';
import AirportDBSchema from './database/airportschema';

const userDb = new UserDBSchema();
userDb.align().then(() => {
  console.log('user database aligned');
});

const airportDb = new AirportDBSchema();
airportDb.align().then(() => {
  console.log('airport schema aligned');
});

const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || '0.0.0.0';

// Launch Node.js server
const server = app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

// Shutdown Node.js app gracefully
function handleExit(options, err) {
  if (options.cleanup) {
    // db.destroy,
    const actions = [server.close, redis.quit];
    actions.forEach((close, i) => {
      try {
        close(() => {
          if (i === actions.length - 1) process.exit();
        });
      } catch (err) {
        if (i === actions.length - 1) process.exit();
      }
    });
  }
  if (err) console.log(err.stack);
  if (options.exit) process.exit();
}

process.on('exit', handleExit.bind(null, { cleanup: true }));
process.on('SIGINT', handleExit.bind(null, { exit: true }));
process.on('SIGTERM', handleExit.bind(null, { exit: true }));
process.on('uncaughtException', handleExit.bind(null, { exit: true }));
