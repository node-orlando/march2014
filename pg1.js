var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';


// Simplest example
pg.connect(settings, function (err, client, done) {
  if(err) throw err;

  client.query('SELECT * FROM episodes', function (err, result) {
    done();
    console.log('Results: ' + result.rowCount);
    console.log(result.rows);
  });
});


// 'lil better
pg.connect(settings, function (err, client, done) {
  if(err) throw err;

  var query = client.query('SELECT * FROM episodes');

  query.on('row', function (row, result) {
    result.addRow(row);
  });

  query.on('end', function (result) {
    done();
    console.log('Results: ' + result.rowCount);
    console.log(result.rows);
  });
});
