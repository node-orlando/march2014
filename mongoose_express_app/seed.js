var mongoose = require('mongoose');
mongoose.DB = mongoose.
  createConnection('mongodb://localhost:27017/node_episodes_mongoose_express');

var Models = require('./models'),
    Episode = Models.Episode;

Episode.remove(function () {

  console.log('Dropped collection\n');

  Episode.create([
    {
      title: 'Winter is Coming, yo!',
      description: 'For realz.',
      comments: [
        {
          description: 'Winter looks cold.',
          rating: '5'
        },
        {
          description: 'These White Walkers are scary.',
          rating: '5'
        }
      ]
    },
    {
      title: 'Lord Snow',
      description: 'Knows nothing.',
      comments: [
        {
          description: 'Jon Snow does not know a thang.',
          rating: '2'
        },
        {
          description: 'No dragons yet ?',
          rating: '1'
        }
      ]
    }
  ], function (err, lastEpisode) {
    var commentId = lastEpisode.comments[0]['_id'];
    console.log(commentId);
    console.log(lastEpisode.comments.id(commentId));
    mongoose.DB.close();
  });

});
