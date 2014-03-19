var redis = require('redis'),
    client = redis.createClient(),
    clientListener = redis.createClient();

// Start with a blank slate.
client.del('characters');

client.sadd('characters', 'Eddard Stark');
client.sadd('characters', 'Cersei Lannister');
client.sadd('characters', 'Robert Baratheon');
client.sadd('characters', 'Khal Drogo');

client.sadd('characters', 'Jon Snow');
client.sadd('characters', 'Littlefinger');

client.smembers('characters', function(err, members) {
  console.log('\nValar Morghulis\n');
  console.log(members);
})

clientListener.on('message', function (channel, message) {
  if(message === 'undefined') return false;

  var character = message;
  console.log(character + ' must die!');
  client.srem('characters', character, function(err, size) {
    if(err) throw err;

    console.log(character + ' is now dead.');
    client.smembers('characters', function (err, members) {
      console.log('Remaninig characters: ' + members);
    })
  });
});

clientListener.subscribe('arya');
