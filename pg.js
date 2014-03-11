// Using the node-postgres driver
// https://github.com/brianc/node-postgres

var pg = require("pg");

var settings = "pg://localhost:5432/node_episodes";

// THIS WORKS, and leverages connection pool
// that defaults to 10 connections.

pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes', [], function (err, result) {
    console.log(JSON.stringify(result.rows, null, " "));
    done();
  })
});

/*
// THIS WORKS, but...
// Limitations: server can only handle 1 query at a time per conenction.
// That means if you have 1 global new pg.Client() connected to your backend your
// entire app is bottleknecked based on how fast postgres can respond to queries

var client = new pg.Client(settings);
client.connect();

var query = client.query("SELECT * FROM episodes");

// The row event is dispatched whenever a row is received from PostgreSQL and
// we use it to append all the individual rows in to an array of rows which are
// passed to a rows property in the end event’s result object. If we did not call
// the result.addRow() method, the rows array would be empty in the end event.
query.on("row", function (row, result) {
    result.addRow(row);
});

// The end event is dispatched when all rows have been returned by the query or
// when an error has been encountered (which would cause the error event to be
// dispatched). In this example we’re dumping all the rows from PostgreSQL to
// the console and then closing the client’s connection using the end() method
// on the Client object.
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});
*/
