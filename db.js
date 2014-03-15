// File: db.js
var pg = require('pg');
var settings = 'pg://localhost:5432/node_episodes';
var db = {};

db.query = function (queryString, args, cb) {
  pg.connect(settings, function (err, client, done) {
    if(err) throw err;

    client.query(queryString, args, function (err, result) {
      if(err) throw err;

      done();
      cb(result.rows);
    })
  });
}

module.exports = db;
