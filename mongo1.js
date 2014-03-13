var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    Connection = require('mongodb').Connection;

var db = new Db('node_episodes',
  new Server('127.0.0.1', Connection.DEFAULT_PORT, {}), {native_parser:false, w:1});

db.open(function(err, db) {
  var episodes = db.collection('episodes'); // can be anything. it doesn't exist, mongo creates.
  episodes.drop();
  // Mongo DB has asynchronous insert/update/remove operations. This means that
  // when you issue an insert operation its a fire and forget operation where the
  // database does not reply with the status of the insert operation. To retrieve
  // the status of the operation you have to issue a query to retrieve the last
  // error status of the connection. To make it simpler to the developer the
  // driver implements the {w:1} options so that this is done automatically when
  // inserting the document. {w:1} becomes especially important when you do update
  // or remove as otherwise it’s not possible to determine the amount of documents
  // modified or removed.
  episodes.insert({title: 'Winter is Coming'}, function(err, docs) {

    episodes.count(function(err, count) {
      console.log('count: ' + count);
    });

    episodes.find().toArray(function(err, results) {
      console.dir(results);
      db.close();
    });
  });

});
