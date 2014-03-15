var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';

// Step #2
// THIS WORKS, and leverages connection pool
// that defaults to 10 connections.
// pg.defaults.poolSize = 11; <- change the connection pool size.
/*console.log('Client defaults: ' + JSON.stringify(pg.defaults) + '\n');

pg.connect(settings, function (err, client, done) {
  if(err) throw err;

  client.query('SELECT * FROM episodes', [], function (err, result) {
    done();
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, ' '));

  })
});

pg.connect(settings, function (err, client, done) {
  if(err) throw err;

  client.query('SELECT * FROM episodes WHERE title = $1', ['Winter is Coming'], function (err, result) {
    done();
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, ' '));
  })
});*/

pg.connect(settings, function (err, client, done) {
  if(err) throw err;

  var query = client.query('SELECT * FROM episodes WHERE title = $1', ['Winter is Coming']);

  query.on('row', function(row, result) {
    result.addRow(row);
  });

  query.on('end', function(result) {
    done()
    console.log('Results: ' + result.rowCount);
    console.log(result.rows);
  });
});
