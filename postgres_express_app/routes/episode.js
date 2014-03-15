var Episode = require('./../models').Episode;

/*
 * GET episodes listing.
 */

exports.list = function(req, res){
  Episode.findAll(req.param('keyword'), function (episodes) {
    return res.render('episodes', { episodes: episodes });
  })
};

exports.new = function (req, res) {
  return res.render('new');
}

exports.create = function (req, res) {
  var episode = new Episode(req.param('episode'));
  episode.save().then(function () {
    return res.redirect('/episodes');
  });
}

exports.edit = function (req, res) {
  var episode = new Episode({ id: req.params.id });
  episode.fetch().then(function (episode) {
    return res.render('episode', { episode: episode });
  })
}

exports.update = function (req, res) {
  var episode = new Episode({ id: req.params.id });
  episode.save(req.param('episode'), { patch: true }).then(function (err) {
    return res.redirect('/episodes');
  });
}

exports.destroy = function (req, res) {
  var episode = new Episode({ id: req.params.id });
  episode.destroy().then(function () {
    return res.redirect('/episodes');
  });
}
