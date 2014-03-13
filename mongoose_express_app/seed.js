var mongoose = require('mongoose');
global.db = mongoose.
  createConnection('mongodb://localhost:27017/node_episodes_mongoose_express');
global.Schema = mongoose.Schema;


var Episode = require('./models/episode')

Episode.remove(function () {

  console.log('Dropped collection\n');

  Episode.create([
    {
      title: 'Winter is Coming, yo!',
      description: 'For realz.',
      characters: [
        {
          name: 'Eddard Stark',
          house: 'Stark'
        },
        {
          name: 'Cersei Lannister',
          house: 'Lannister'
        }
      ]
    },
    {
      title: 'Lord Snow',
      description: 'Knows nothing.',
      characters: [
        {
          name: 'Jon Snow',
          house: 'Stark'
        },
        {
          name: 'Daenerys Targaryen',
          house: 'Targaryen'
        }
      ]
    }
  ], function (err, lastEpisode) {
    console.log('Created episodes\n');
    console.log(lastEpisode);
    global.db.close();
  });

});
