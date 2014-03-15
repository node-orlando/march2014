var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';

function runQuery(queryString, args, cb){
  pg.connect(settings, function (err, client, done) {
    if(err) throw err;

    client.query(queryString, args, function (err, result) {
      if(err) throw err;

      cb(result.rows);
      done('ok');
    })
  });
}

runQuery('SELECT * FROM episodes', [], function (rows) {
  console.log('Results: ' + rows.length);
  console.log(JSON.stringify(rows, null, ' '));
});

runQuery("SELECT * FROM episodes where title ILIKE $1", ['%snow'], function (rows) {
  console.log('Results: ' + rows.length);
  console.log(JSON.stringify(rows, null, ' '));
});
