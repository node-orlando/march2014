var mongoose = require('mongoose'),
    connectionString = 'mongodb://localhost:27017/node_episodes_mongoose_express';
mongoose.DB = mongoose.createConnection(connectionString);

var Models = require('./models'),
    Episode = Models.Episode;

Episode.remove(function () {

  console.log('\nDropped collection\n');

  Episode.create([
    {
      title: 'Winter is Coming',
      description: 'Introduces the setting and the main characters of the show.',
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
      description: 'Jon Snow trains at The Wall.',
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
    },
    {
      title: 'The Rains of Castamere',
      description: 'The Red Wedding',
      comments: [
        {
          description: 'O. MY. GAWD.',
          rating: 5
        },
        {
          description: 'Best show EVER',
          rating: 5
        }
      ]
    }
  ], function (err, lastEpisode) {
    if(err) throw err;

    console.log('\nEpisodes created\n');
    mongoose.DB.close();
  });

});
