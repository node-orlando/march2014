var Episode = require('./../models/episode')

/*
 * GET episodes listing.
 */

exports.list = function(req, res){
  Episode.find(function (err, episodes) {
    return res.render('episodes', { episodes: episodes });
  });
};

exports.new = function (req, res) {
  return res.render('new')
}

exports.create = function (req, res) {
  Episode.create(req.body.episode, function (err, episode) {
    return res.redirect('/episodes');
  });
}

exports.edit = function (req, res) {
  Episode.findById(req.params.id, function(err, episode) {
    return res.render('episode', { episode: episode });
  });
}

exports.update = function (req, res) {
  Episode.findByIdAndUpdate(req.params.id, req.body.episode, function (err, episode) {
    return res.redirect('/episodes');
  });
}

exports.destroy = function (req, res) {
  Episode.findByIdAndRemove(req.params.id, function () {
    return res.redirect('/episodes');
  })
}
