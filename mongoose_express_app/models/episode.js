var EpisodeSchema = new global.Schema({
  id: global.Schema.ObjectId,
  title: String,
  description: String,
  characters: [{ name: String, house: String }]
});

// http://mongoosejs.com/docs/api.html#index_Mongoose-model
var Episode = db.model('Episode', EpisodeSchema);
// use optional third argument to specifcy collection name, instead of having
// mongoose induce it from the model name.

// Add some dummy data.
module.exports = Episode;
