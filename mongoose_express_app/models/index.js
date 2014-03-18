var mongoose = require('mongoose');

var EpisodeSchema = mongoose.Schema({
  title: String,
  description: String,
  comments: [{
    description: String,
    rating: { type: Number, max: 5 }
  }]
});

// http://mongoosejs.com/docs/api.html#index_Mongoose-model
var Episode = mongoose.DB.model('Episode', EpisodeSchema);
// use optional third argument to specifcy collection name, instead of having
// mongoose induce it from the model name.

// Add some dummy data.
module.exports = {
  Episode: Episode
};
