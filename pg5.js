var db = require('./db');

db.query('SELECT * FROM episodes', [], function (rows) {
  console.log('Results: ' + rows.length);
  console.log(JSON.stringify(rows, null, ' '));
});

db.query('SELECT * FROM episodes where title ILIKE $1', ['%snow'], function (rows) {
  console.log('Results: ' + rows.length);
  console.log(JSON.stringify(rows, null, ' '));
});
