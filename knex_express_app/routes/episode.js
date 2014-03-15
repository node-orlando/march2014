var Episode = require('./../models/episode');

/*
 * GET episodes listing.
 */

exports.list = function(req, res){
  Episode.findAll(req.param('keyword'), function (episodes) {
    return res.render('episodes', { episodes: episodes });
  })
};
