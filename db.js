var pg = require("pg");
var settings = "pg://localhost:5432/node_episodes";
var db = {}

db.query = function (queryString, args, cb) {
  pg.connect(settings, function (err, client, done) {
    client.query(queryString, args, function (err, result) {
      cb(result.rows);
      done('ok');
    })
  });
}

module.exports = db;
