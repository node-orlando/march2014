// File not used anymore.
// See individual pg[number].js files

// Using the node-postgres driver
// https://github.com/brianc/node-postgres

// Step #4
// Extract db query code into its own module.

/*
var db = require('./db')
db.query('SELECT * FROM episodes', function (rows) {
  console.log(JSON.stringify(rows, null, " "));
})
*/

// For Steps 1 - 3
// var pg = require("pg");
// var settings = "pg://localhost:5432/node_episodes";

// Step #3
/*
function runQuery(queryString, args, cb){
  pg.connect(settings, function (err, client, done) {
    client.query(queryString, args, function (err, result) {
      cb(result.rows);
      done('ok');
    })
  });
}

runQuery('SELECT * FROM episodes', [], function (rows) {
  console.log(JSON.stringify(rows, null, " "));
});
*/


// Step #2
// THIS WORKS, and leverages connection pool
// that defaults to 10 connections.
// pg.defaults.poolSize = 11; <- change the connection pool size.
/*
pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes', [], function (err, result) {
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, " "));
    done('ok');
  })
});

pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes WHERE title = $1', ['Winter is Coming'], function (err, result) {
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, " "));
    done('ok');
  })
});

*/
