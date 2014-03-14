/*
 * Persistency Layer
*/

var Episode = global.db.Model.extend({
  tableName: 'episodes',

  comments: function () {
    return this.hasMany(Comment);
  }
});

var Comment = global.db.Model.extend({
  tableName: 'comments'
});

module.exports = {
  Episode: Episode,
  Comment: Comment
}
