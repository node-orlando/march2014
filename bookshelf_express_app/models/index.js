var Bookshelf = require('bookshelf').PG;
/*
 * Persistency Layer
*/
var Episode = Bookshelf.Model.extend({
  tableName: 'episodes',

  comments: function () {
    return this.hasMany(Comment);
  }
},
{
  findAll: function (keyword, cb) {
    var episodes = this.collection().query('orderBy', 'id', 'ASC');

    if(keyword){
      var match = '%' + keyword + '%';
      episodes.query(function (qb) {
        qb.where('title', 'ilike', match).
        orWhere('description', 'ilike', match);
      });
    }

    episodes.fetch({ withRelated: 'comments' }).then(function(result){
      cb(result.toJSON());
    });
  }
});

var Comment = Bookshelf.Model.extend({
  tableName: 'comments'
});

module.exports = {
  Episode: Episode,
  Comment: Comment
}
