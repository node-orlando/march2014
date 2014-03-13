var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_episodes_mongoose_express');

// TODO: drop collection in order to start with blank slate.

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EpisodeSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String
});

// http://mongoosejs.com/docs/api.html#index_Mongoose-model
var Episode = mongoose.model('Episode', EpisodeSchema);
// use optional third argument to specifcy collection name, instead of having
// mongoose induce it from the model name.

// Add some dummy data.
Episode.create([
  {
    title: 'Winter is Coming, yo!',
    description: 'For realz.'
  },
  {
    title: 'Lord Snow',
    description: 'Knows nothing.'
  }
]);

module.exports = Episode;
