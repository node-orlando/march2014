var Episode = require('./../models/episode')

/*
 * GET episodes listing.
 */

exports.list = function(req, res){
  Episode.find(function (err, episodes) {
    return res.render('episodes', { episodes: episodes });
  });
};
