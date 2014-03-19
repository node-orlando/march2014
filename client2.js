var redis = require('redis'),
    client = redis.createClient();

// Name of a character from client1.js
var victim = process.argv[2];

// Kills that character
client.publish('arya', victim, function () {
  client.end();
});
