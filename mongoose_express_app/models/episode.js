var EpisodeSchema = new global.Schema({
  id: global.Schema.ObjectId,
  title: String,
  description: String
});

// http://mongoosejs.com/docs/api.html#index_Mongoose-model
var Episode = db.model('Episode', EpisodeSchema);
// use optional third argument to specifcy collection name, instead of having
// mongoose induce it from the model name.

// Add some dummy data.
Episode.remove(function () {

  console.log('Dropped collection\n');

  Episode.create([
    {
      title: 'Winter is Coming, yo!',
      description: 'For realz.'
    },
    {
      title: 'Lord Snow',
      description: 'Knows nothing.'
    }
  ], function () {
    console.log('Created episodes\n');
  });

})


module.exports = Episode;
