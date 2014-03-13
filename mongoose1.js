var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node_episodes_mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EpisodeSchema = new Schema({
  id: ObjectId,
  title: String,
  description: String
});

var Episode = mongoose.model('Episode', EpisodeSchema);

var episode = new Episode({
  title: 'Winter is Coming, yo!'
});

episode.save(function (err, record) {
  console.log('Saved: ' + record);
  mongoose.connection.close();
});
