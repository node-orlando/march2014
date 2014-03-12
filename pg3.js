var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';

// Step #2
// THIS WORKS, and leverages connection pool
// that defaults to 10 connections.
// pg.defaults.poolSize = 11; <- change the connection pool size.
console.log('Client defaults: ' + JSON.stringify(pg.defaults) + '\n');

pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes', [], function (err, result) {
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, ' '));
    done('ok');
  })
});

pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes WHERE title = $1', ['Winter is Coming'], function (err, result) {
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, ' '));
    done('ok');
  })
});
