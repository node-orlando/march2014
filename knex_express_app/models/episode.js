var Knex = require('knex').PG;

var Episode = {
  findAll: function (keyword, cb) {
    if(keyword){
      Episode.filter(keyword, cb);
    }else{
      Episode.all(cb)
    }
  },

  all: function (cb) {
    Knex('episodes').select().then(function(result) {
      return cb(result);
    });
  },

  filter: function (keyword, cb) {
    Knex('episodes').where('title', 'ILIKE', '%' + keyword + '%').select().
      then(function(result) {
        cb(result);
      });
  }
};

module.exports = Episode;
