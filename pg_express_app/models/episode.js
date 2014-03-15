var db = require('./db');

var Episode = {
  findAll: function (keyword, cb) {
    if(keyword){
      Episode.filter(keyword, cb);
    }else{
      Episode.all(cb)
    }
  },

  all: function (cb) {
    db.query('SELECT * FROM episodes', [], function (episodes) {
      return cb(episodes);
    });
  },

  filter: function (keyword, cb) {
    db.query('SELECT * FROM episodes WHERE title ILIKE $1', ['%'+ keyword +'%'],
    // Example of SQL Injection Vulnerability below.
    // SELECT * FROM episodes WHERE title ilike '%b'; DROP TABLE episodes; --
    //db.textQuery("SELECT * FROM episodes WHERE title ILIKE '%"+ keyword +"%'",
      function (episodes) {
        return cb(episodes);
      }
    );
  }
};

module.exports = Episode;
