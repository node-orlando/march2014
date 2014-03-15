var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';


// Simplest example
pg.connect(settings, function (err, client, done) {
  client.query('SELECT * FROM episodes', function (err, result) {
    console.log('Results: ' + result.rowCount);
    console.log(result.rows);
    done('ok');
  });
});


// 'lil better
pg.connect(settings, function (err, client, done) {

  query = client.query('SELECT * FROM episodes');

  query.on('row', function (row, result) {
    result.addRow(row);
  });

  query.on('end', function (result) {
    console.log('Results: ' + result.rowCount);
    console.log(result.rows);
    client.end();
  });
});
