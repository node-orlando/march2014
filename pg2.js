// Using the node-postgres driver
// https://github.com/brianc/node-postgres

// Step #1
var pg = require('pg')
var settings = 'pg://localhost:5432/node_episodes';
var client = new pg.Client(settings);
client.connect();

var query = client.query('SELECT * FROM episodes WHERE title = $1', ['Winter is Coming']);

// THIS WORKS, but...
// Limitations: server can only handle 1 query at a time per conenction.
// That means if you have 1 global new pg.Client() connected to your backend your
// entire app is bottleknecked based on how fast postgres can respond to queries
// See https://gist.github.com/brianc/6908287
query.on('row', function (row, result) {
    result.addRow(row);
});

query.on('end', function (result) {
    console.log('Results: ' + result.rowCount);
    console.log(JSON.stringify(result.rows, null, '    '));
    client.end();
});
