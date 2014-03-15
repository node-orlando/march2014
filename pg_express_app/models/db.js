var pg = require("pg");
var settings = "pg://localhost:5432/node_episodes";

var query = function (parameterizedString, args, cb) {
  pg.connect(settings, function (err, client, done) {
    client.query(parameterizedString, args, function (err, result) {
      if(err) throw err;

      cb(result.rows);
      done('ok');
    })
  });
}

var textQuery = function (sql, cb) {
  pg.connect(settings, function (err, client, done) {
    client.query(sql, [], function (err, result) {
      if(err) throw err;

      cb(result.rows);
      done('ok');
    })
  });
}

module.exports = {
  query: query,
  textQuery: textQuery
};
